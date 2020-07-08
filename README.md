<html>
<h1>Virtual Pet Project</h1>

<p><strong><em>An exercise in Object Oriented Programming using JavaScript.</em></strong></p>

<p>In the name of 90s nostalgia I've put together a virtual pet program using Javascript. Once you've named your new pet you can take care of it as it gets older and even start a family. Here's how it works:

<ul>
    <li>Choose a cute name for your pet.</li>
    <li>Your pet grows up.</li>
    <li>As they get older, they get hungrier and less fit.</li>
    <li>You can take your pet for a walk to improve its fitness.</li>
    <li>You can feed your pet to reduce its hunger.</li>
    <li>You can talk to your pet to check if it needs feeding or walking.</li>
    <li>If your pet gets too hungry or unfit, it will die.</li>
    <li>If your pet gets to 30 days old it will die of old age.</li>
</ul>

<h2>Prerequisites</h2>
<p>You will need to install Node.js and Jest to run this application.<p>
<ul>
    <li>Install <a href='https://nodejs.org/en/'>Node.js</a></li>
    <li>Install <a href='https://jestjs.io/'>Jest</a></li>
</ul>

<h2>How to Run the Program</h2>
<h3>Setup</h3>
<p>Download the repository and run <code>npm install</code> in the terminal.<br>
Navigate to the installed folder in the terminal and type <code>node</code>. This opens the REPL interactive shell.<br>
Once in node you will need to allow it access to the Javascript inside of the pet file. Type <code>const Pet = require('./src/pet');</code> to allow access. Now you're ready to play.</p>
<h3>Play</h3>
<p><code>const pet = newPet('CHOOSE-ANY-NAME');</code> - creates a pet with the name of your choice. <br>
<code>pet</code> - view the status of your pet's properties such as age and hunger.<br>
<code>pet.growUp()</code> - your pet gets older.<br>
<code>pet.feed()</code> - feed your pet.<br>
<code>pet.walk()</code> - boost fitness by taking your pet for a walk.<br>
<code>pet.checkUp()</code> - ask your pet how it's feeling. <br>
<code>pet.haveBaby('CHOOSE-A-BABY-NAME')</code> - your pet will have a baby. Now you have two mouths to feed so be careful to keep checking in with both!<br>
<code>pet.children</code> - you can view a list of all your pet's children and their properties here. To perform an action on one of your pet's children you can reference them by their place in the array, e.g. <code>pet.children[0].feed()</code> would feed your firstborn.<p>
<p><em><strong>WARNING!</strong><br>
...If your pet's hunger hits level 10, it will starve to death!<br>
......If its fitness level drops to 0, it will die of unhealthiness!</em><p>

<h2>Tests</h2>
<p>In this project the code is pure vanilla Javascript and is tested using Jest. To run the tests yourself you will need to install Jest with developer dependencies by typing <code>npm install -D jest</code> into the terminal.<br>
You will then be able to run the tests by typing <code>npm test</code>.</p>

<h2>Author</h2>
<p>Samantha Tovey</p>

<h2>Acknowledgements</h2>
<p><a href="https://github.com/MCRcodes">Manchester Codes</a></p>
</html>