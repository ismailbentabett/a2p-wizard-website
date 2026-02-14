(function(){
  var webhookUrl = 'https://hook.us2.make.com/thkc91ciiefnc6kk25wfemv4zhwy52as';
  var businessName = 'SiteSledge LLC';
  var slug = 'sitesledgellc';
  var supportEmail = 'info@sitesledgellc.nebulabrandgroup.com';
  var supportPhone = '+1 (234) 225-0604';

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

  function handleFormSubmit(form, formType){
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn ? submitBtn.textContent : 'Submit';
    
    // Prevent double submit
    if(submitBtn){
      if(submitBtn.disabled) return;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
    }

    var data = {
      timestamp: new Date().toISOString(),
      form_type: formType,
      page_url: window.location.href,
      business_name: businessName,
      slug: slug,
      support_email: supportEmail,
      support_phone: supportPhone,
      full_name: '',
      email: '',
      phone: '',
      message: '',
      sms_marketing: false,
      sms_informational: false
    };

    var nameEl = form.querySelector('[name="full_name"], [name="name"]');
    var emailEl = form.querySelector('[name="email"]');
    var phoneEl = form.querySelector('[name="phone"]');
    var msgEl = form.querySelector('[name="message"]');
    var mktEl = form.querySelector('[name="sms_marketing"]');
    var infoEl = form.querySelector('[name="sms_informational"]');

    if(nameEl) data.full_name = nameEl.value || '';
    if(emailEl) data.email = emailEl.value || '';
    if(phoneEl) data.phone = phoneEl.value || '';
    if(msgEl) data.message = msgEl.value || '';
    if(mktEl) data.sms_marketing = mktEl.checked;
    if(infoEl) data.sms_informational = infoEl.checked;

    // Send to webhook (fire and forget - show success regardless)
    if(webhookUrl){
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        mode: 'no-cors' // Make.com webhooks may not have CORS headers
      }).catch(function(){});
    }

    // Small delay for UX, then show modal
    setTimeout(function(){
      // Reset button
      if(submitBtn){
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
      // Show modal
      showModal();
      // Reset form
      form.reset();
    }, 400);
  }

  // Attach to optin form (home page)
  var optinForm = document.getElementById('optinForm');
  if(optinForm){
    optinForm.addEventListener('submit', function(e){
      e.preventDefault();
      handleFormSubmit(optinForm, 'optin');
    });
  }

  // Attach to contact form
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
