#!/usr/bin/env bash
set -e
./tw -i tailwind/input.css -o static/css/output.css --minify
cargo run -- build
