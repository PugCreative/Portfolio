const sendDoc = (email, text) => {
  Email.send({
    SecureToken: "2aec69e1-61e7-4e40-948f-cd665279d87f",
    To: "taromaru.movie@gmail.com",
    From: email,
    Subject: "HPからのお問い合わせ",
    Body: text,
    message: "aaaaa",
  }).then((move) => (move = window.location.href = "thanks.html"));
};

const sending = document.getElementById("sending");
const btn = document.getElementById("send_Doc");

btn.addEventListener(
  "click",
  function () {
    const companyName = document.getElementById("company-name").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const inquiry = document.getElementById("inquiry").value;
    if (name === "") {
      const nameMsg = document.getElementById("name_msg");
      nameMsg.classList.add("shown");
      return false;
    } else if (email === "") {
      const emailMsg = document.getElementById("email_msg");
      emailMsg.classList.add("shown");
      return false;
    } else if (inquiry === "") {
      const inquiryMsg = document.getElementById("inquiry_msg");
      inquiryMsg.classList.add("shown");
      return false;
    }
    const text =
      "以下の内容で問い合わせがありました。<br><br>" +
      "------------------------<br>" +
      "■会社名" +
      "<br>" +
      companyName +
      "<br>" +
      "<br>" +
      "■氏名" +
      "<br>" +
      name +
      "<br>" +
      "<br>" +
      "■メールアドレス" +
      "<br>" +
      email +
      "<br>" +
      "<br>" +
      "■電話番号" +
      "<br>" +
      phone +
      "<br>" +
      "<br>" +
      "■問い合わせ内容" +
      "<br>" +
      inquiry +
      "<br>" +
      "------------------------";

    sendDoc(email, text);
    sending.classList.add("visible");
  },
  false
);
