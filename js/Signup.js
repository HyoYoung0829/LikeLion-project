function DoJoinForm__submit(form) {
  var name = form.name.value;
  var loginId = form.id.value;
  var loginPw = form.pw.value;
  var loginPwConfirm = form.repw.value;

  // 필요한 유효성 검사를 수행합니다.
  // 이 부분을 필요에 따라 추가하거나 수정해주세요.

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // 성공적으로 회원가입 데이터를 전송한 경우 처리할 내용을 작성해주세요.
        alert('회원가입이 완료되었습니다!');
        // 예를 들면 로그인 페이지로 이동하거나, 메인 페이지로 리디렉션할 수 있습니다.
        window.location.href = './Login.html';
      } else {
        // 회원가입 데이터 전송 실패 시 처리할 내용을 작성해주세요.
        alert('회원가입 중 오류가 발생했습니다.');
      }
    }
  };

  xhr.open('POST', '/api/signup', true);  // 서버의 실제 URL 주소로 변경해주세요.
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  var data = {
    name: name,
    loginId: loginId,
    loginPw: loginPw,
    loginPwConfirm: loginPwConfirm
  };
  
  xhr.send(JSON.stringify(data));
}
