# Licensing and Third-Party Notices

## Table of contents

- [1. Current repository state](#1-current-repository-state)
- [2. Embedded admin template](#2-embedded-admin-template)
- [3. Backend package metadata](#3-backend-package-metadata)
- [4. Before redistribution](#4-before-redistribution)
- [5. Maintainer checklist](#5-maintainer-checklist)

## 1. Current repository state

The repository contains multiple package roots with different license metadata. A single root-level license has not been added because applying one without a complete ownership and dependency review could incorrectly relicense third-party material.

## 2. Embedded admin template

The nested `Client/react/` application identifies itself as Gradient Able Free React Admin Template and includes an existing MIT license file and upstream attribution in its own README. Preserve that license and attribution. Do not delete or replace it during repository cleanup.

## 3. Backend package metadata

The backend package manifest declares ISC. Package metadata alone does not prove that every source file and bundled asset is owned by the repository maintainer or compatible with redistribution.

## 4. Before redistribution

- Inventory third-party templates, images, icons, fonts, and copied source.
- Preserve required copyright and license notices.
- Review dependency licenses and terms.
- Determine ownership of original project code.
- Decide whether a root license can apply to original files without conflicting with embedded terms.
- Do not claim ownership of upstream template code.

## 5. Maintainer checklist

- [ ] Review the nested MIT license and upstream notices.
- [ ] Review backend ISC metadata and source ownership.
- [ ] Inventory bundled assets and their licenses.
- [ ] Generate a dependency license report.
- [ ] Add a root license only after ownership and legal review.
