function SendMSG(e) {
    e.preventDefault()
      let nam_txt = document.querySelector("#name")
      let email_txt = document.querySelector("#email")
      let subject_txt = document.querySelector("#subject")
      let message_txt = document.querySelector("#message")
      let body = "Name:" + nam_txt.value + ",  " + "email:" + email_txt.value + ",  " + "subject:" + subject_txt.value +  ",  "+ "Message : " + message_txt.value
      
  let temp = {
    from_name : nam_txt.value,
    to_name : "Durga Bhavani",
    message : body
  }
  
  if(nam_txt.value === "" || email_txt.value === "" || subject_txt.value === "" || message_txt.value === "" || body.value === "" ) {
    return alert("Please Fill Complete Details!!")
  }

  emailjs.send('service_dgzslkp', 'template_s7cwgdl', temp, "yInfKq3RKqNrQCrdU")
  .then((res) => {
    if(res.status == 200) {
      success()
    }else {
      failure()
    }
  })
  
  
  nam_txt.value = ""
  email_txt.value = ""
  subject_txt.value = ""
  message_txt.value = ""
  
  
  }
  
  function success() {
    let thank = document.querySelector(".msg-pop-up")
    thank.style.display = "block"
    setTimeout(() => {
      thank.style.display = "none"
    },1000)
  }
  
  function failure() {
    let fail = document.querySelector(".failed-msgpop")
    fail.style.display = "block"
    setTimeout(() => {
      fail.style.display = "none"
    },1000)
  }
  
  // d9edf392-bffd-4fa3-9d98-b2566146073d => token1
  //template_v4x8ndu
  // service id = service_f3etz3t