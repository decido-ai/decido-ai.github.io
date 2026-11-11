// /research became an index; old links to sections of the Decido 1 report (/research#results etc.) go to the report.
(function () {
  var h = location.hash;
  if (/^#(results|example|limitations|contact)$/.test(h)) location.replace("/research/decido-1" + h);
})();
