Swal.fire({
  icon: 'success',
  icon: 'error',
  title: "you don't have a wallet, creating one for you",
  text: 'Make a deposit now',
  confirmButtonText: `<a href="/deposit/${coinId}">Ok</a>`,

  showDenyButton: true,
  showCancelButton: true,
  background: '#121007',
  allowOutsideClick: false,
  width: '60em',
  footer: `<a href="/credentials">Upload Documents</a>`,
  timer: 3000,
  html: '<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif">',
  confirmButtonText: `<button style="background-color: red; color: black; width: 100px;" href="/deposit">O0k</button>`
});
