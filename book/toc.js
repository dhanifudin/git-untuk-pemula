// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="pengantar.html">Pengantar</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Bagian I: Penggunaan Git Secara Lokal</li><li class="chapter-item expanded "><a href="bagian-1/bab-01-pengenalan-git.html"><strong aria-hidden="true">1.</strong> Bab 1: Pengenalan Git</a></li><li class="chapter-item expanded "><a href="bagian-1/bab-02-persiapan-instalasi.html"><strong aria-hidden="true">2.</strong> Bab 2: Persiapan dan Instalasi</a></li><li class="chapter-item expanded "><a href="bagian-1/bab-03-repository-pertama.html"><strong aria-hidden="true">3.</strong> Bab 3: Repository Pertama</a></li><li class="chapter-item expanded "><a href="bagian-1/bab-04-tracking-perubahan.html"><strong aria-hidden="true">4.</strong> Bab 4: Tracking Perubahan</a></li><li class="chapter-item expanded "><a href="bagian-1/bab-05-status-riwayat.html"><strong aria-hidden="true">5.</strong> Bab 5: Melihat Status dan Riwayat</a></li><li class="chapter-item expanded "><a href="bagian-1/bab-06-branching-dasar.html"><strong aria-hidden="true">6.</strong> Bab 6: Branching Dasar</a></li><li class="chapter-item expanded "><a href="bagian-1/bab-07-membatalkan-perubahan.html"><strong aria-hidden="true">7.</strong> Bab 7: Membatalkan Perubahan</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Bagian II: Penggunaan Git Secara Remote</li><li class="chapter-item expanded "><a href="bagian-2/bab-08-pengenalan-github.html"><strong aria-hidden="true">8.</strong> Bab 8: Pengenalan GitHub</a></li><li class="chapter-item expanded "><a href="bagian-2/bab-09-menghubungkan-remote.html"><strong aria-hidden="true">9.</strong> Bab 9: Menghubungkan Repository Lokal ke Remote</a></li><li class="chapter-item expanded "><a href="bagian-2/bab-10-clone-workflow-remote.html"><strong aria-hidden="true">10.</strong> Bab 10: Clone dan Workflow Remote</a></li><li class="chapter-item expanded "><a href="bagian-2/bab-11-github-pages.html"><strong aria-hidden="true">11.</strong> Bab 11: Mengelola Website dengan GitHub Pages</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Bagian III: Kolaborasi dengan Git</li><li class="chapter-item expanded "><a href="bagian-3/bab-12-fork-repository.html"><strong aria-hidden="true">12.</strong> Bab 12: Fork Repository (Studi Kasus)</a></li><li class="chapter-item expanded "><a href="bagian-3/bab-13-kolaborasi-langsung.html"><strong aria-hidden="true">13.</strong> Bab 13: Kolaborasi dengan Hak Akses Tulis Langsung</a></li><li class="chapter-item expanded "><a href="bagian-3/bab-14-organisasi.html"><strong aria-hidden="true">14.</strong> Bab 14: Organisasi (Studi Kasus)</a></li><li class="chapter-item expanded "><a href="bagian-3/bab-15-pull-request.html"><strong aria-hidden="true">15.</strong> Bab 15: Pull Request dan Code Review</a></li><li class="chapter-item expanded "><a href="bagian-3/bab-16-merge-conflicts.html"><strong aria-hidden="true">16.</strong> Bab 16: Mengatasi Merge Conflicts</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="penutup.html">Penutup</a></li><li class="chapter-item expanded affix "><a href="referensi.html">Referensi</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
