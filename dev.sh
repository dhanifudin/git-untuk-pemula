#!/bin/bash

# Development script for Git untuk Pemula mdBook

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_step() {
    echo -e "${BLUE}==>${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if mdBook is installed
check_mdbook() {
    if ! command -v mdbook &> /dev/null; then
        print_error "mdBook not found!"
        echo "Install with: cargo install mdbook"
        echo "Or download from: https://github.com/rust-lang/mdBook/releases"
        exit 1
    fi
    print_success "mdBook found: $(mdbook --version)"
}

# Build book
build() {
    print_step "Building mdBook..."
    mdbook build
    print_success "Build completed! Output in 'book/' folder"
}

# Serve book locally
serve() {
    print_step "Starting local server..."
    print_warning "Website will open at http://localhost:3000"
    print_warning "Press Ctrl+C to stop server"
    mdbook serve --open
}

# Clean build artifacts
clean() {
    print_step "Cleaning build artifacts..."
    rm -rf book/
    print_success "Clean completed!"
}

# Watch and build on changes
watch() {
    print_step "Watching for file changes..."
    print_warning "Press Ctrl+C to stop watching"
    mdbook watch
}

# Test build (for CI)
test() {
    print_step "Testing build..."
    mdbook build
    
    # Check if book folder exists and has content
    if [ -d "book" ] && [ -f "book/index.html" ]; then
        print_success "Test build successful!"
        return 0
    else
        print_error "Test build failed!"
        return 1
    fi
}

# Show help
help() {
    echo "Development script for Git untuk Pemula"
    echo ""
    echo "Usage: $0 <command>"
    echo ""
    echo "Commands:"
    echo "  build    - Build mdBook"
    echo "  serve    - Serve locally with live reload"
    echo "  clean    - Clean build artifacts"
    echo "  watch    - Watch files and rebuild automatically"
    echo "  test     - Test build (for CI)"
    echo "  help     - Show this help"
    echo ""
    echo "Examples:"
    echo "  $0 serve     # Start development server"
    echo "  $0 build     # Build for production"
    echo "  $0 clean     # Clean before fresh build"
}

# Main logic
case "$1" in
    build)
        check_mdbook
        build
        ;;
    serve)
        check_mdbook
        serve
        ;;
    clean)
        clean
        ;;
    watch)
        check_mdbook
        watch
        ;;
    test)
        check_mdbook
        test
        ;;
    help|--help|-h)
        help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        help
        exit 1
        ;;
esac
