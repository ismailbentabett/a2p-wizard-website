# Toll-Free Verification Fix Pack

**Canonical SMS disclosure (use everywhere):**

```
I consent to receive Customer Care SMS messages from SiteSledge LLC regarding my quote or service inquiry. Message frequency may vary (up to 4 messages per month). Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. Consent is not a condition of purchase.
```

**Canonical program disclosure (sms.html, privacy Message Frequency, terms Message Frequency & Rates):**

- Frequency: `Message frequency may vary (up to 4 messages per month).`
- Rates: `Message and data rates may apply.`
- STOP: `Reply STOP to unsubscribe.` / `Reply STOP at any time.`
- HELP: `Reply HELP for help.` / `Reply HELP for assistance.`
- Consent: `Consent is not a condition of purchase.`

When a toll-free number is provided, use it in Terms "Opt-Out & Support" and sms.html Support/STOP/HELP instructions. Keep SUPPORT_PHONE / TOLL_FREE_NUMBER in script.js as single source; replace hardcoded numbers in HTML when verifying.

---

## 1. script.js

**Add:** `TOLL_FREE_NUMBER` constant and TODO for number replacement. Expose `SUPPORT_PHONE` (already exists as `supportPhone`) for future dynamic use; document that displayed number in Terms/SMS/STOP/HELP must match verified toll-free.

```diff
 (function(){
   var webhookUrl = 'https://hook.us2.make.com/thkc91ciiefnc6kk25wfemv4zhwy52as';
   var businessName = 'SiteSledge LLC';
   var slug = 'sitesledgellc';
   var supportEmail = 'info@sitesledgellc.nebulabrandgroup.com';
-  var supportPhone = '+1 (234) 225-0604';
+  // Single source for contact number. For Toll-Free verification, the number in Terms/SMS/STOP/HELP must match the number being verified.
+  var SUPPORT_PHONE = '+1 (234) 225-0604';
+  // TODO: When verifying a toll-free number, set TOLL_FREE_NUMBER (e.g. '1-800-XXX-XXXX') and replace SUPPORT_PHONE and all hardcoded phone numbers in index.html, contact.html, about.html, services.html, sms.html, privacy.html, terms.html so STOP/HELP and support number match the verified toll-free number.
+  var TOLL_FREE_NUMBER = ''; // Optional: set when toll-free is verified (e.g. '1-800-XXX-XXXX').
```

Also replace any reference to `supportPhone` with `SUPPORT_PHONE` in the same file (data payload).

```diff
-      support_phone: supportPhone,
+      support_phone: SUPPORT_PHONE,
```

---

## 2. index.html

**Replace:** SMS consent paragraph and remove separate HELP line. Add canonical disclosure; keep Terms/Privacy in legal checkbox.

```diff
         <div class="check">
           <input id="sms_consent" name="sms_consent" type="checkbox" />
           <span>
-          I consent to receive SMS messages from SiteSledge LLC regarding my quote or service inquiry. Message frequency may vary (up to 4 messages per month). Message and data rates may apply. Reply STOP to unsubscribe. Consent is not a condition of purchase.
+          I consent to receive Customer Care SMS messages from SiteSledge LLC regarding my quote or service inquiry. Message frequency may vary (up to 4 messages per month). Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. Consent is not a condition of purchase.
           </span>
         </div>
 
-        <p class="help-line">Reply HELP for help.</p>
-
         <div class="ctaRow">
```

---

## 3. contact.html

**Same as index.html:** Canonical SMS disclosure and remove separate HELP line.

```diff
           <div class="check">
             <input id="sms_consent" name="sms_consent" type="checkbox" />
             <span>
-            I consent to receive SMS messages from SiteSledge LLC regarding my quote or service inquiry. Message frequency may vary (up to 4 messages per month). Message and data rates may apply. Reply STOP to unsubscribe. Consent is not a condition of purchase.
+            I consent to receive Customer Care SMS messages from SiteSledge LLC regarding my quote or service inquiry. Message frequency may vary (up to 4 messages per month). Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. Consent is not a condition of purchase.
             </span>
           </div>
 
-          <p class="help-line">Reply HELP for help.</p>
-
           <div class="ctaRow">
```

---

## 4. sms.html

**Align:** Frequency, rates, STOP, HELP in one consistent block; keep Support line. Use same wording as canonical (frequency/rates/STOP/HELP). Note: Replace phone number with verified toll-free when applicable.

```diff
       <p class="muted">Message frequency may vary (up to 4 messages per month). Message and data rates may apply.</p>
 
       <div style="margin-top:12px" class="kv">
-        <div class="k">Opt out</div><div class="v">Reply <strong>STOP</strong> at any time.</div>
-        <div class="k">Help</div><div class="v">Reply <strong>HELP</strong> for assistance.</div>
+        <div class="k">Opt out</div><div class="v">Reply <strong>STOP</strong> to unsubscribe.</div>
+        <div class="k">Help</div><div class="v">Reply <strong>HELP</strong> for help.</div>
         <div class="k">Support</div><div class="v"><a class="u" href="mailto:info%40sitesledgellc.nebulabrandgroup.com">info@sitesledgellc.nebulabrandgroup.com</a> • <a class="u" href="tel:+12342250604">+1 (234) 225-0604</a></div>
       </div>
```

*(Optional: add note in FIX_PACK that when TOLL_FREE_NUMBER is set, replace the Support tel link and number with the toll-free number.)*

---

## 5. privacy.html

**Align:** Section 3 SMS and "Message Frequency" block to canonical wording; merge HELP into same sentence as STOP; add "Consent is not a condition of purchase" where appropriate.

Section 3 — single paragraph with STOP and HELP together, and frequency/rates identical:

```diff
       <h2>3. SMS & Messaging Consent</h2>
       <p>
         SMS consent applies to <strong>Customer Care</strong> messages only. By providing your phone number
         and opting in via our website form checkbox, you consent to receive SMS from SiteSledge LLC for:
         inquiry follow-ups, appointment and service updates, and account or service communications.
         We do not use SMS for marketing or promotional messaging. Message frequency may vary (up to 4 messages per month).
         Message and data rates may apply.
       </p>
       <p>
-        Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for assistance.
+        Reply <strong>STOP</strong> to unsubscribe. Reply <strong>HELP</strong> for help. Consent is not a condition of purchase.
       </p>
```

Message Frequency block — exact match to canonical:

```diff
       <div class="legal" style="margin-top:12px">
         <p><strong>Message Frequency</strong></p>
         <p>
-          If you opt in to receive Customer Care SMS messages from SiteSledge LLC, Message frequency may vary (up to 4 messages per month).
-          Message and data rates may apply. You may opt out at any time by replying STOP. Reply HELP for assistance.
+          If you opt in to receive Customer Care SMS messages from SiteSledge LLC, message frequency may vary (up to 4 messages per month).
+          Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. Consent is not a condition of purchase.
         </p>
       </div>
```

---

## 6. terms.html

**Align:** Opt-Out & Support and Message Frequency & Rates to canonical wording. Ensure STOP/HELP and frequency/rates match. Number in "text STOP to X" must match verified toll-free when set.

Opt-Out & Support — keep structure; align HELP wording:

```diff
         <p>
           You can cancel the SMS service at any time. Just text <strong>"STOP"</strong> to +1 (234) 225-0604.
           After you send the SMS message <strong>"STOP"</strong> to us, we will send you an SMS message to confirm
           that you have been unsubscribed. After this, you will no longer receive SMS messages from us.
           If you want to join again, just sign up as you did the first time and we will start sending SMS messages
           to you again. If you are experiencing issues with the messaging program you can reply with the keyword
-          <strong>HELP</strong> for more assistance, or you can get help directly at <strong>info@sitesledgellc.nebulabrandgroup.com</strong>
+          <strong>HELP</strong> for help, or you can get help directly at <strong>info@sitesledgellc.nebulabrandgroup.com</strong>
           or +1 (234) 225-0604.
         </p>
```

Message Frequency & Rates — exact frequency sentence:

```diff
         <p>
           As always, message and data rates may apply for any messages sent to you from us and to us from you.
           Message frequency may vary (up to 4 messages per month). If you have any questions about your text plan
           or data plan, it is best to contact your wireless provider.
         </p>
```

*(No wording change needed if already identical; optional: add HTML comment that +1 (234) 225-0604 must be replaced with verified toll-free number.)*

---

## Replacement steps when toll-free number is verified

1. In **script.js**: Set `TOLL_FREE_NUMBER = '1-800-XXX-XXXX'` (or your verified number) and set `SUPPORT_PHONE` to the same value for form payloads.
2. In **index.html**, **contact.html**, **about.html**, **services.html**: Replace every `tel:+12342250604` and display text "+1 (234) 225-0604" with the toll-free number (e.g. `tel:+18005551234` and "1-800-555-1234").
3. In **sms.html**: Replace the Support phone link and number with the toll-free number.
4. In **privacy.html**: Replace contact phone "+1 (234) 225-0604" with the toll-free number.
5. In **terms.html**: Replace every "+1 (234) 225-0604" in Opt-Out & Support and Contact Information with the toll-free number.
6. Re-audit: Confirm the number shown in STOP/HELP instructions and support contact is identical to the toll-free number submitted for verification.
