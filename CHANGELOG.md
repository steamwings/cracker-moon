# Changelog

All notable changes to this project will (aspirationally) be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Nothing yet.

## [v0.0.5] - 2025-05-22

### Fixed

- Use readAsDataURL for converting images to base64 URIs. (Images were not getting converted to a base64 URI before.)

## [v0.0.4] - 2025-05-21

### Fixed

- Fixed `body` width so there is no scroll bar.

## [v0.0.3] - 2025-05-21

### Changed

- Link colors better match theme (inspired by [arturolinares/sn-rme](https://github.com/arturolinares/sn-rme/blob/e64b3b7fad460c8577db2203f94fa29d2798feec/src/lib/theme.js#L24))
- Small readme fix for local testing (serve `dist/` rather than project root)

## [v0.0.2] - 2025-05-21

### Fixed

- External links not navigating

## [v0.0.1] - 2025-05-21

### Added

- Initial theme support (at least supports light and dark--not rigorously tested)
- Updated margins so headings can now be collapsed
