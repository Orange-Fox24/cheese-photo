function copyPhone() {
  const phone = "+79950751803";

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phone).then(showToast).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }

  function fallbackCopy() {
    const input = document.createElement("input");
    input.value = phone;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast();
  }

  function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  }
}

function copyMaxPhone() {
  const phone = "79950751803";
  const toast = document.getElementById("toast");

  function showToast() {
    toast.textContent = "Номер скопирован. Откройте MAX";
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        toast.textContent = "Номер скопирован";
      }, 300);
    }, 2500);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(phone).then(showToast).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }

  function fallbackCopy() {
    const input = document.createElement("input");
    input.value = phone;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast();
  }
}
