function showToast(type) {
  
    // create a toast element
    let toast = document.createElement("li");
    toast.classList.add("toast");
    toast.classList.add(type);
   
    // add text to the toast element
    let text = document.createTextNode(type.toUpperCase() + "!");
    toast.appendChild(text);
   
    // get the notification list element
    let notification = document.getElementById("notification");
   
    // append the toast element to the notification list
    notification.appendChild(toast);
   
    // remove the toast element after some time
    setTimeout(function() {
      notification.removeChild(toast);
    },3000);
   }