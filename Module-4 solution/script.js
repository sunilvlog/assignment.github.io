(function() {

    var names = ["sunil","love","sneha","baby","jeet","sunny","yaakov","john","millie","anushka"];
    for (i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);

        } else {
          helloSpeaker.speak(names[i]);
        }
    }
})();