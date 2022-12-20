document.getElementById("submit_btn").addEventListener("click", donatebtn)

  function donatebtn(e) {

    


    var inputValues = document.querySelector('input[name="amount"]:checked');
    if (inputValues != null) {
      var name = document.getElementById("name").value
      var Noc = document.getElementById("NOC").value
      var zip = document.getElementById("zip").value
      var country = document.getElementById("country").value
      var email = document.getElementById("email").value
      var Card = document.getElementById("CN").value
      var cvv = document.getElementById("cvv").value
      var month = document.getElementById("expmonth").value
      var year = document.getElementById("expyear").value

      if (name == "") {
        alert("Please Enter Your Name")
      }

      if (zip == "") {
        alert("Please Enter Your ZIP Code")
      }

      if (country == "") {
        alert("Please Enter Your Country")
      }

      if (Noc == "") {
        alert("Please Enter The Name On Card")
      }

      if (email == "") {
        alert("Please Enter Your Email Address")
      }

      if (Card == "") {
        alert("Please Enter Your Card number")
      }

      if (month == "") {
        alert("Please Enter Expiry Month of The Card")
      }

      if (year == "") {
        alert("Please Enter Expiry Year of The Card")
      }

      if (cvv == "") {
        alert("Please Enter The CVV Number")

      }
      alert("Thank you for your donation")


    }
    else {
      alert("No amount has been selected");





    }

    var radio = document.querySelector('input[type=radio][name=amount]:checked');
    radio.checked = false;



    document.getElementById("name").value = "";
    document.getElementById("NOC").value = "";
    document.getElementById("email").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("cvv").value = "";
    document.getElementById("country").value = "";
    document.getElementById("expmonth").value = "";
    document.getElementById("expyear").value = "";
    document.getElementById("CN").value = "";








    e.preventDefault()
    

  }

  