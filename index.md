<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Nope</title>
  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/sheets.css" rel="stylesheet">
  <link href="css/nope.css" rel="stylesheet">
  
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Cinzel:700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:200,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Gothic+A1:400,900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@300&display=swap" rel="stylesheet">





  <!-- Include AngularJS -->
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-sanitize.js"></script>

</head>

<body id="page-top" ng-app="nope-app" ng-controller="nope-controller">


  <div id="logo-banner">
  <div id="logo-banner-2">
      <h1 id="logo-guild-name">Nope</h1>
      <p id="logo-server-faction">Faerlina • Horde</p>
    </div>
  </div>



  <section id="about" class="bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 info-pane mx-auto">
          <h2>About Us</h2>
          <p class="lead">Nope is a hardcore Horde guild on Faerlina, founded on <span class="highlight">?/?/????</span>. We are a friendly group of passionate and driven WoW players who wish to experience Classic WoW to its fullest as a team.</p>
          <ul>
            <li>Accomplishment 1</li>
            <li>Accomplishment 2</li>
            <li>Accomplishment 3</li>
          </ul>
          <h2>Raid Times</h2>
          <p class="lead">Our guild currently runs two raid groups.</p>
          <ul>
            <li>Gamers — Monday/Thursday @ 7 PM Eastern, every other week, covering each lockout </li>
            <li>Dragonslayers — Friday/Sunday @ 7 PM Eastern </li>
          </ul>
          <h2>What You Can Expect From Us</h2>
          <ul>
            <li>A friendly, passionate, and experienced community to collaborate with through the Classic WoW experience</li>
            <li>A fun and competitive raiding environment</li>
            <li>A large roster of over 80 raiders to foster competition</li>
            <li>Loot council where loot is rewarded based upon progression needs and performance as opposed to seniority and favoritism</li>
            <li>New members will be integrated into the roster as soon as possible in order to prove their merit and demonstrate what they can bring to our team</li>
            <li>An active community outside of raid hours</li>
          </ul>
          <h2>What We Expect From You</h2>
          <ul>
            <li><strong>Great Attitude:</strong> We're looking for players who are mature, respectful, and value integrity. We have zero tolerance for disrespectful or toxic individuals.</li>
            <li><strong>A Team-Oriented Mindset:</strong> We want players who value the success of the guild over their own parse or personal gain, even if it means stepping into a different role or handling undesirable boss mechanics.</li>
            <li><strong>Preparation:</strong> As part of respecting each other's time, we expect our raiders to be prepared when they show up for raid nights. This means doing research in advance for upcoming progression, having the proper add-ons and WeakAuras, and carrying proper consumables and gear.</li>
            <li><strong>Desire to Excel:</strong> We're not looking for players who are satisfied with the bare minimum. We're looking for players who are willing to go above and beyond at understanding their class and the raid encounters. We want players who are eager to improve their performance from raid to raid.</li>
            <li><strong>Consistent Attendance:</strong> We only raid two nights per week, so it is important for people to show up to our raids nearly 100% of the time. We understand that real life happens, but we can't rely on people who are consistently late or absent.</li>
          </ul>
          <h2>Speed Rankings</h2>
          <div ng-repeat="(raid,val) in times" ng-if="val.Speed != 0" id="raid-{{$index}}-progression" class="progression-bar">
            <span>{{val.Raid}} — {{val.Speed}}</span><span ng-if="val.Rank !=''"> — Rank {{val.Rank}} Horde</span><span ng-if="val.Note !=''">, {{val.Note}}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="join" class="bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 info-pane mx-auto">
          <h2>Join Us</h2>
          <p class="lead">If you're interested in joining Nope, please <a href='https://docs.google.com/forms/d/1ohe6LgeQ95whTJ37lwBr78iFkiN8X88Op-IbpPyfPo0/edit'>fill out an application</a>. If you'd like to speak to our leadership for more information, feel free to contact us:</p>
          <ul>
            <li>Spyder, GM — FakeDiscord#1234 on Discord</li>
            <li>Broductivity, Recruitment Officer — FakeDiscord#5678 on Discord</li>
          </ul>
          <h4>Recruiting Needs</h4>
          <p  class="lead" ng-if="recruitment[8].Recruiting == 'true'">At the moment, we are currently seeking the following classes:</p>
          <div id="recruitment-needs">
          <p class="recruitment-string" ng-repeat="(class,val) in recruitment | filter:{Class:'!Recruiting'}" ng-if="val.Recruiting == 'true' && recruitment[8].Recruiting == 'true'"><img class="class-icon" src="img/{{val.Class}}-icon.png"><span class="{{val.Class}}-color class-name">{{val.Class}}</span><span ng-if="val.Note != ''"> — {{val.Note}}</span></p>
          <p class="lead" ng-if="recruitment[8].Recruiting == 'true'">We are always looking for exceptional players, who are passionate and push themselves to be the best. If your class is not listed and you consider yourself exceptional, I would urge you to still apply. </p>
          <p class="lead" ng-if="recruitment[8].Recruiting == 'false'">We aren't recruiting any specific classes at the moment, but if you consider yourself to be an exceptional player, we would love to hear from you.</p>
          </div>
      </div>
    </div>
  </section>



    <footer class="py-3 bg-dark">
      <div class="container">
        <div class="row" id="footer-section">
          <div class="col-lg-12 mx-auto">
            <a class="footer-link js-scroll-trigger" href="https://www.youtube.com/user/Nope-guild/videos" target="_blank"><img class="footer-icon" src="img/youtube-icon.png">Youtube</a>
            <a class="footer-link js-scroll-trigger" href="https://discord.gg/2BkTKg" target="_blank"><img class="footer-icon" src="img/discord-icon.png">Discord</a>
            <a class="footer-link js-scroll-trigger" href="https://classic.warcraftlogs.com/guild/calendar/479945/" target="_blank"><img class="footer-icon" src="img/warcraftlogs-icon.png">Logs</a>          
          </div>
        </div>
      </div>
    </footer> 
  <!-- Bootstrap core JavaScript -->
    <script
  src="https://code.jquery.com/jquery-3.5.1.js"
  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

  <!-- Plugin JavaScript -->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom JavaScript for this theme -->
  <script src="js/scrolling-nav.js"></script>

  <!-- JavaScript to generate page content -->
  <script src="js/content.js"></script>

</body>

</html>
