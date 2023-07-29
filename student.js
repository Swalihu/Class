       // Simple JavaScript code for receiving and displaying the teacher's video
        document.addEventListener('DOMContentLoaded', () => {
            const videoElement = document.getElementById('teacher-video');

            // Connect to the WebSocket server (replace 'wss://your-websocket-server' with the actual server URL)
            const socket = new WebSocket('wss://swalihu.github.io/Class/teacher.html');
 
            //Event listener for when the WebSocket connection is established
            socket.addEventListener('open', () => {
                console.log('WebSocket connection established.');

                // Event listener for receiving video stream data from the server
                socket.addEventListener('message', (event) => {
                    // Convert the received data into a Blob
                    const blob = new Blob([event.data], { type: 'video/webm' });

                    // Create an object URL from the Blob and set it as the video source
                    const objectURL = URL.createObjectURL(blob);
                    videoElement.src = objectURL;
                });
            });

            // Event listener for WebSocket errors
            socket.addEventListener('error', (error) => {
                console.error('WebSocket error:', error);
            });
        });
