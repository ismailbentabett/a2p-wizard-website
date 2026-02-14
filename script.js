(function(){
  // ——— Single source of truth (Toll-Free verification) ———
  var BUSINESS_NAME = "SiteSledge LLC";
  var SUPPORT_EMAIL = "contact@sitesledge.llc";
  var PRIMARY_DOMAIN = "sitesledge.llc";
  var TF_NUMBER_E164 = "+18449460109";
  var TF_NUMBER_DISPLAY = "1-844-946-0109";

  var webhookUrl = 'https://hook.us2.make.com/thkc91ciiefnc6kk25wfemv4zhwy52as';

  var modal = document.getElementById('thankYouModal');
  var modalClose = document.getElementById('modalClose');
  var modalOk = document.getElementById('modalOk');

  function showModal(){
    if(modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function hideModal(){
    if(modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if(modalClose) modalClose.addEventListener('click', hideModal);
  if(modalOk) modalOk.addEventListener('click', hideModal);
  if(modal){
    modal.addEventListener('click', function(e){
      if(e.target === modal) hideModal();
    });
  }
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') hideModal();
  });

  // ——— DOM normalization: enforce TF number, support email, domain ———
  function normalizeDom(){
    var telLinks = document.querySelectorAll('a[href^="tel:"]');
    for(var i = 0; i < telLinks.length; i++){
      telLinks[i].setAttribute('href', 'tel:' + TF_NUMBER_E164);
    }
    var mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
    for(var j = 0; j < mailtoLinks.length; j++){
      mailtoLinks[j].setAttribute('href', 'mailto:' + SUPPORT_EMAIL);
    }
    function walkText(node){
      if(node.nodeType === 3){
        var t = node.textContent;
        var changed = false;
        var s = t;
        s = s.replace(/\+\s*1\s*\(\s*234\s*\)\s*225\s*[-.]?\s*0604/gi, TF_NUMBER_DISPLAY);
        s = s.replace(/\+\s*1\s*234\s*225\s*0604/gi, TF_NUMBER_DISPLAY);
        s = s.replace(/\(\s*234\s*\)\s*225\s*[-.]?\s*0604/g, TF_NUMBER_DISPLAY);
        s = s.replace(/234\s*[-.]?\s*225\s*[-.]?\s*0604/g, TF_NUMBER_DISPLAY);
        s = s.replace(/\+18449460109/g, TF_NUMBER_DISPLAY);
        if(s !== t){ node.textContent = s; changed = true; }
        if(changed) return;
        var emailPattern = /info\s*@\s*sitesledgellc\.nebulabrandgroup\.com/gi;
        if(emailPattern.test(t)){
          node.textContent = t.replace(emailPattern, SUPPORT_EMAIL);
        }
        var sitesledgeCom = /\bsitesledge\.com\b/g;
        if(sitesledgeCom.test(t)){
          node.textContent = t.replace(sitesledgeCom, PRIMARY_DOMAIN);
        }
        return;
      }
      if(node.nodeType === 1 && node.childNodes && node.childNodes.length){
        for(var k = 0; k < node.childNodes.length; k++) walkText(node.childNodes[k]);
      }
    }
    walkText(document.body);
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', normalizeDom);
  } else {
    normalizeDom();
  }

  function validateForm(form){
    var legalEl = form.querySelector('[name="agree_legal"]');
    var smsEl = form.querySelector('[name="sms_consent"]');
    var phoneEl = form.querySelector('[name="phone"]');
    if(legalEl && !legalEl.checked) return 'Please agree to the Terms of Service and Privacy Policy to continue.';
    if(smsEl && smsEl.checked){
      var raw = phoneEl ? (phoneEl.value || '').trim() : '';
      if(!raw) return 'Phone number required for SMS opt-in.';
      var digits = raw.replace(/\D/g, '');
      if(digits.length < 10) return 'Please enter a valid phone number (at least 10 digits) for SMS opt-in.';
    }
    return null;
  }

  function handleFormSubmit(form, formType){
    var err = validateForm(form);
    if(err){
      alert(err);
      return;
    }

    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn ? submitBtn.textContent : 'Submit';

    if(submitBtn){
      if(submitBtn.disabled) return;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
    }

    var legalEl = form.querySelector('[name="agree_legal"]');
    var smsEl = form.querySelector('[name="sms_consent"]');
    var agreeLegal = legalEl ? legalEl.checked : false;
    var smsConsent = smsEl ? smsEl.checked : false;

    var nameEl = form.querySelector('[name="full_name"], [name="name"]');
    var emailEl = form.querySelector('[name="email"]');
    var phoneEl = form.querySelector('[name="phone"]');
    var msgEl = form.querySelector('[name="message"]');

    var data = {
      full_name: nameEl ? (nameEl.value || '') : '',
      email: emailEl ? (emailEl.value || '') : '',
      phone: phoneEl ? (phoneEl.value || '') : '',
      message: msgEl ? (msgEl.value || '') : '',
      agree_legal: agreeLegal,
      sms_consent: smsConsent,
      sms_consent_text_version: 'v1.0',
      timestamp_iso: new Date().toISOString(),
      page_url: window.location.href,
      business_name: BUSINESS_NAME,
      support_email: SUPPORT_EMAIL,
      support_phone: TF_NUMBER_DISPLAY
    };

    if(webhookUrl){
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        mode: 'no-cors'
      }).catch(function(){});
    }

    var modalMessageSms = document.getElementById('modalMessageSms');
    if(modalMessageSms) modalMessageSms.style.display = smsConsent ? 'block' : 'none';

    setTimeout(function(){
      if(submitBtn){
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
      showModal();
      form.reset();
    }, 400);
  }

  var optinForm = document.getElementById('optinForm');
  if(optinForm){
    optinForm.addEventListener('submit', function(e){
      e.preventDefault();
      handleFormSubmit(optinForm, 'optin');
    });
  }

  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      handleFormSubmit(contactForm, 'contact');
    });
  }
})();

/* About Page Logic */
(function(){
  var story = document.getElementById('about-story');
  var mission = document.getElementById('about-mission');
  var why = document.getElementById('about-why');
  if(story && !story.querySelector('p').textContent.trim()) story.style.display='none';
  if(mission && !mission.querySelector('p').textContent.trim()) mission.style.display='none';
  if(why && !why.querySelector('ul').innerHTML.trim()) why.style.display='none';
})();
