# Toll-Free Verification Audit Report — SiteSledge LLC

**Business:** SiteSledge LLC  
**Domain:** sitesledge.llc  
**Contact email:** contact@sitesledge.llc  
**Toll-free number (E.164):** +18449460109  
**Toll-free number (display):** 1-844-946-0109  
**Use case:** Customer Care only (no marketing)  
**Opt-in method:** Web form checkbox (optional, unchecked by default)

---

## Hard Constraints — PASS/FAIL

| # | Constraint | Status | Notes |
|---|------------|--------|------|
| 1 | Toll-Free only; no A2P/10DLC or short code language | PASS | No such language on site |
| 2 | Customer Care only; no promotional/marketing opt-in | PASS | All copy and legal pages state Customer Care only |
| 3 | SMS opt-in checkbox optional; never pre-checked | PASS | No `checked` on `#sms_consent`; not required to submit |
| 4 | Phone optional; required when SMS consent checked (JS validation) | PASS | script.js: phone required + ≥10 digits when sms_consent checked |
| 5 | Opt-in disclosure: business + purpose + frequency cap + rates + STOP + HELP + not condition of purchase, one paragraph | PASS | Canonical disclosure in index.html and contact.html |
| 6 | Privacy Policy + Terms links near form; not inside SMS disclosure | PASS | Legal checkbox separate from SMS checkbox; links in legal checkbox only |
| 7 | Site public (no login/password) | PASS | No gating |
| 8 | Footer: Privacy Policy, Terms, SMS Program on all main pages | PASS | index, contact, about, services, sms; privacy/terms footers include all three |
| 9 | Single toll-free number everywhere (Terms STOP, SMS Program, contact) | PASS | 1-844-946-0109 / +18449460109 in HTML + script.js constants + DOM normalization |
| 10 | All contact email = contact@sitesledge.llc; domain = sitesledge.llc | PASS | Replaced site-wide; script.js SUPPORT_EMAIL and PRIMARY_DOMAIN |

---

## Pages Where Phone/Email Appear — Source of Truth

All contact values are driven by **script.js constants** and/or **hardcoded canonical values** in HTML. DOM normalization runs on DOMContentLoaded for pages that load script.js (index, contact, about, services) and rewrites any remaining tel/mailto and visible phone/email text.

| Page | Phone | Email | Source |
|------|--------|--------|--------|
| index.html | 1-844-946-0109, tel:+18449460109 | contact@sitesledge.llc | Hardcoded + DOM normalization |
| contact.html | 1-844-946-0109, tel:+18449460109 | contact@sitesledge.llc | Hardcoded + DOM normalization |
| about.html | 1-844-946-0109, tel:+18449460109 | contact@sitesledge.llc | Hardcoded + DOM normalization |
| services.html | 1-844-946-0109, tel:+18449460109 | contact@sitesledge.llc | Hardcoded + DOM normalization |
| sms.html | 1-844-946-0109, tel:+18449460109 | contact@sitesledge.llc | Hardcoded in HTML (no script.js) |
| privacy.html | 1-844-946-0109 | contact@sitesledge.llc | Hardcoded in HTML |
| terms.html | 1-844-946-0109 (STOP/HELP + contact) | contact@sitesledge.llc | Hardcoded in HTML |

**Constants in script.js:** `BUSINESS_NAME`, `SUPPORT_EMAIL`, `PRIMARY_DOMAIN`, `TF_NUMBER_E164`, `TF_NUMBER_DISPLAY`. No old phone/email remains in visible HTML.

---

## Checkbox and Disclosure Compliance

- **Legal checkbox (required):** Label exactly: “I agree to the Terms of Service and Privacy Policy.” Links: Terms of Service → terms.html, Privacy Policy → privacy.html. Present on both index and contact forms. Required to submit.
- **SMS checkbox (optional):** Not required; never pre-checked. When checked, phone is required and must have ≥10 digits (script.js).
- **SMS disclosure (one paragraph):** Exact text on both forms:  
  *“I consent to receive Customer Care SMS messages from SiteSledge LLC regarding my quote or service inquiry. Message frequency may vary (up to 4 messages per month). Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. Consent is not a condition of purchase.”*  
  No marketing language; HELP is in the same paragraph.

---

## Footer Links

| Page | Privacy Policy | Terms & Conditions | SMS Program |
|------|----------------|--------------------|-------------|
| index.html | ✓ | ✓ | ✓ |
| contact.html | ✓ | ✓ | ✓ |
| about.html | ✓ | ✓ | ✓ |
| services.html | ✓ | ✓ | ✓ |
| sms.html | ✓ | ✓ | ✓ |
| privacy.html | ✓ (self) | ✓ | ✓ |
| terms.html | ✓ | ✓ (self) | ✓ |

---

## Legal Pages Alignment

- **sms.html:** Customer Care only; opt-in via web form checkbox; message types: inquiry follow-ups, appointment/service updates, account/service communications; frequency “up to 4 messages per month”; rates; STOP; HELP; support contact = contact@sitesledge.llc, 1-844-946-0109.
- **privacy.html:** Customer Care SMS only; no mobile info sharing for marketing/promotional purposes; frequency/rates/STOP/HELP/consent not condition of purchase; contact = contact@sitesledge.llc, 1-844-946-0109.
- **terms.html:** SMS terms with Customer Care only; STOP/HELP/rates/frequency; “Consent is not a condition of purchase”; Opt-Out & Support block uses 1-844-946-0109 and contact@sitesledge.llc; contact section same.

---

## Changelog (Compliance Hardening Pass)

| File | Changes |
|------|---------|
| **script.js** | Added BUSINESS_NAME, SUPPORT_EMAIL, PRIMARY_DOMAIN, TF_NUMBER_E164, TF_NUMBER_DISPLAY. DOM normalization on DOMContentLoaded: all tel → TF E.164, mailto → SUPPORT_EMAIL, visible phone/email/domain text replaced. Form validation: legal required; when SMS checked, phone required and ≥10 digits. Payload: full_name, email, phone, message, agree_legal, sms_consent, sms_consent_text_version "v1.0", timestamp_iso, page_url (no marketing fields). |
| **index.html** | Hero CTA and contact card/footer: phone 1-844-946-0109, tel:+18449460109, email contact@sitesledge.llc. Legal and SMS checkboxes: added .check-legal / .check-sms-consent; canonical SMS disclosure; legal label with Terms/Privacy links only. |
| **contact.html** | Same contact/footer and form checkbox structure as index; canonical disclosure; TF number and contact email. |
| **about.html** | Footer and contact block: 1-844-946-0109, contact@sitesledge.llc. |
| **services.html** | Footer and contact block: 1-844-946-0109, contact@sitesledge.llc. |
| **sms.html** | Support and footer: 1-844-946-0109, contact@sitesledge.llc. Customer Care only; message types and STOP/HELP/rates/frequency aligned. |
| **privacy.html** | Contact and message-frequency language: contact@sitesledge.llc, 1-844-946-0109. Footer: Privacy, Terms, SMS Program. No marketing mobile sharing. |
| **terms.html** | Opt-Out & Support and contact: 1-844-946-0109, contact@sitesledge.llc. Footer: Privacy, Terms, SMS Program. |
| **style.css** | .check-sms-consent span and .check-legal span: 14px, line-height 1.5; consent text readable for screenshots. |
| **README.md** | Replaced with project summary and “Toll-Free Verification Evidence Pack” steps (incognito, index/contact forms, screenshot requirements, public URLs for verification). |
| **CHECKLIST.md** | Updated to reflect final compliant state. |
| **docs/TF_AUDIT_REPORT.md** | This report: PASS/FAIL table, pages list, checkbox/disclosure confirmation, footer links, changelog. |

---

## Verification Tests (Simulated)

- SMS checkbox is not checked by default. ✓  
- SMS checkbox is not required. ✓  
- Form submits with legal checked and SMS unchecked with phone blank. ✓  
- Form blocks if SMS checked and phone blank or &lt;10 digits. ✓  
- SMS disclosure contains: business name, purpose, frequency cap, rates, STOP, HELP, not condition of purchase. ✓  
- Terms/Privacy links visible near form, not inside SMS paragraph. ✓  
- All phone/email use TF and contact@sitesledge.llc; no old values in HTML. ✓  
- sms.html, privacy.html, terms.html match program disclosures. ✓  

---

**Submission readiness:** PASS — Site is aligned with Toll-Free (US/CA) Customer Care verification requirements. Capture evidence per README and submit with toll-free number 1-844-946-0109.
