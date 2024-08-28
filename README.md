Project keywords: Node.js, Jquery ioSocket, chat

Node.js java io Socket chat application. the program simulates chat services used in online services. This is the first version, so the features are very limited for now.

Main features at the moment:

MESSAGE TRANSMISSION TIME

the time is stored using JavaScript's Date, getHours, getMinutes, and getSeconds methods. method are in their own function, which is always called when sending a message.
the message transmission time is always displayed in the upper right corner of the message.

COPYING THE TEXT OF THE SENT MESSAGE

To copy the text, the application uses the jQuery click function. the text of the message is displayed in the li element named 'messages' and the
jquery function is attached to the same element. This allows the user to copy the selected text with a click of the mouse.

CONVERT TEXT TO SPEECH

The text of the message can also be converted to speech using the Speech Synthesis API.This feature also uses the Jquery click method
in the same way as the text copy described above.
After jquery has saved the text, the text is sent as a parameter to a JavaScript function that executes the Speech Synthesis API
