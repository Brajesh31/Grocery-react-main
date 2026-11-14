# Accessibility Statement and Development Standard

## Table of contents

- [1. Commitment](#1-commitment)
- [2. Conformance status](#2-conformance-status)
- [3. Interface requirements](#3-interface-requirements)
- [4. Keyboard access](#4-keyboard-access)
- [5. Forms and validation](#5-forms-and-validation)
- [6. Images and media](#6-images-and-media)
- [7. Testing checklist](#7-testing-checklist)
- [8. Reporting an issue](#8-reporting-an-issue)

## 1. Commitment

Accessibility is a product quality requirement. Grocery React should work for people using different devices, input methods, browsers, and assistive technologies.

## 2. Conformance status

A formal WCAG audit has not been completed. No WCAG conformance level is claimed. The project should work toward WCAG 2.2 Level AA and validate that target through automated and manual testing.

## 3. Interface requirements

Use semantic landmarks and logical headings. Prefer native HTML controls. Ensure text and controls have sufficient contrast, do not communicate state through colour alone, provide visible focus, support zoom and reflow, and respect reduced-motion preferences. Custom widgets must expose accessible names, roles, states, and keyboard behaviour.

## 4. Keyboard access

All interactive features must be reachable and operable by keyboard. Focus order must be logical and visible. Dialogs and menus must manage focus predictably and allow dismissal without trapping users. Avoid positive tabindex values.

## 5. Forms and validation

Every field needs a programmatic label. Required fields and constraints must be clear. Errors must identify the field and explain how to correct it. Do not rely only on placeholder text, colour, or transient notifications.

## 6. Images and media

Provide useful alternative text for informative images and empty alternative text for decorative images. Product imagery should identify the product when that is useful to the user. Prefer HTML text over text embedded in images.

## 7. Testing checklist

Check keyboard-only use, focus visibility, labels, heading hierarchy, contrast, responsive zoom, validation announcements, reduced motion, and screen-reader behaviour. Automated tools supplement, but do not replace, manual assistive-technology testing.

## 8. Reporting an issue

Open a bug or documentation issue with the affected page, browser, assistive technology if relevant, steps to reproduce, expected behaviour, and actual behaviour. Do not include private user data.
