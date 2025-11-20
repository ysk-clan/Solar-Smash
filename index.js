<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Solar Smash Fullscreen Wrapper</title>
<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: black;
  }
  iframe {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
</head>
<body>
<iframe src="https://truffled.lol/gamefile/solar.html"></iframe>

<script>
  // Make sure iframe always fills the window if resized
  function resizeIframe() {
    var f = document.querySelector("iframe");
    f.style.width = window.innerWidth + "px";
    f.style.height = window.innerHeight + "px";
  }

  window.addEventListener("resize", resizeIframe);
  resizeIframe();
</script>
</body>
</html>
