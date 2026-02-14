# Toll-Free Website Verification Checklist

**Business:** SiteSledge LLC  
**Domain:** sitesledge.llc | **Contact:** contact@sitesledge.llc | **Toll-free:** 1-844-946-0109  
**Use case:** Customer Care only (Toll-Free verification)  
**Scope:** All forms and legal/SMS pages

---

## Form-by-Form Checklist

| # | Item | PASS/FAIL | Evidence |
|---|------|-----------|----------|
| 1 | Phone field optional on form | PASS | index.html, contact.html: "Mobile Phone Number (Optional)" |
| 2 | SMS checkbox present | PASS | index.html, contact.html: `#sms_consent` |
| 3 | SMS checkbox unchecked by default | PASS | No `checked` on `#sms_consent` |
| 4 | SMS checkbox optional to submit | PASS | script.js: phone required only when sms_consent checked |
| 5 | Terms/Privacy checkbox separate from SMS | PASS | .check-legal vs .check-sms-consent; legal required, SMS optional |
| 6 | Disclosure: program/brand + message purpose | PASS | "Customer Care SMS messages from SiteSledge LLC regarding my quote or service inquiry." |
| 7 | Disclosure: rates statement | PASS | "Message and data rates may apply." |
| 8 | Disclosure: frequency with cap | PASS | "Message frequency may vary (up to 4 messages per month)." |
| 9 | Disclosure: STOP instructions | PASS | "Reply STOP to unsubscribe." |
| 10 | Disclosure: HELP instructions | PASS | "Reply HELP for help." (in same paragraph) |
| 11 | Disclosure: "consent not a condition of purchase" | PASS | In canonical disclosure on both forms |
| 12 | Links to Terms + Privacy near form | PASS | In legal checkbox only (not inside SMS paragraph) |
| 13 | HELP inside SMS consent paragraph | PASS | Single paragraph; no separate help-line |
| 14 | Number in Terms/SMS/STOP-HELP matches verified toll-free | PASS | 1-844-946-0109 everywhere; script.js TF_NUMBER_* |
| 15 | Single source for support/toll-free number | PASS | script.js constants + DOM normalization + HTML hardcoded to same values |
| 16 | Frequency/rates/STOP/HELP identical (forms, sms, privacy, terms) | PASS | Canonical wording across all |
| 17 | Footer: Privacy, Terms, SMS Program on all main pages | PASS | index, contact, about, services, sms, privacy, terms |
| 18 | No marketing/promo SMS language | PASS | Customer Care only site-wide |

---

## Forms in Scope

- **Form #1:** index.html — `#optinForm` (Request Information)
- **Form #2:** contact.html — `#contactForm` (Request Information)

Both use identical legal checkbox, SMS checkbox (optional), and canonical SMS disclosure. Phone required only when SMS consent checked (with ≥10 digits).

---

## Canonical SMS Disclosure (exact)

*I consent to receive Customer Care SMS messages from SiteSledge LLC regarding my quote or service inquiry. Message frequency may vary (up to 4 messages per month). Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. Consent is not a condition of purchase.*

---

## Evidence Pack

See **README.md** section “Toll-Free Verification Evidence Pack” for steps to capture screenshots (incognito, both forms, both checkboxes, full disclosure, Terms/Privacy links) and paste public image URLs into LC Phone verification.
