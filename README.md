<!--<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Som Valley Preschool</title>
    <link rel="stylesheet" href="styles1.css">
    <link rel="icon" type="image/x-icon" href="favicon-32x32.png">
    <link rel="icon" type="image/x-icon" href="C:\Users\parth\Downloads\favicon_io\favicon-32x32.png">
</head>
<body>
    <header>
        <div class="container">
            <img src="logo.png" alt="Som Valley Preschool Logo" class="logo"> <!-- Add your image here
            <h1>Welcome to Som Valley Preschool</h1>
            <p id="greeting" aria-live="polite"></p>
            <nav>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#programs">Our Programs</a></li>
                    <li><a href="#admission">Admissions</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section class="carousel" aria-label="Image carousel">
            <div class="carousel-images">
                <img src="image1.jpg" alt="Children engaged in preschool activities" class="active">
                <img src="image2.jpg" alt="Happy children playing together">
                <img src="image3.jpg" alt="Classroom with children learning">
            </div>
            <button id="prevBtn" class="carousel-button" aria-label="Previous image">Prev</button>
            <button id="nextBtn" class="carousel-button" aria-label="Next image">Next</button>
        </section>
<h1>we stand for duty of  atmost care of your kids <h1>
        <section class="quote" aria-labelledby="quoteHeading">
            <h2 id="quoteHeading">Quote of the Day</h2>
            <p id="dailyQuote">"Every child is a different kind of flower, and all together, make this world a beautiful garden."</p>
        </section>

        <section id="about" aria-labelledby="aboutHeading">
            <h2 id="aboutHeading">About Us</h2>
            <p>At Som Valley Preschool, our mission is to provide a nurturing and stimulating environment where young children can develop their cognitive, emotional, and social skills.</p>
            <h3>Meet Our Team</h3>
            <div class="team-members">
                <div class="team-member">
                    <img src="teacher1.jpg" alt="Lead Teacher">
                    <h4>Lead Teacher</h4>
                </div>
                <div class="team-member">
                    <img src="teacher2.jpg" alt="Assistant Teacher">
                    <h4>Assistant Teacher</h4>
                </div>
            </div>
        </section>

        <section id="programs" aria-labelledby="programsHeading">
            <h2 id="programsHeading">Our Programs</h2>
            <div class="program-list">
                <div class="program">
                    <h3>Preschool Prep</h3>
                    <p>A fun and engaging program designed for children aged 3-4.</p>
                    <p><strong>Schedule:</strong> Mon-Fri, 9 AM - 12 PM</p>
                </div>
                <div class="program">
                    <h3>Junior Explorers</h3>
                    <p>For children aged 4-5, emphasizing early literacy and hands-on learning.</p>
                    <p><strong>Schedule:</strong> Mon-Fri, 12 PM - 3 PM</p>
                </div>
                <div class="program">
                    <h3>Kindergarten Readiness</h3>
                    <p>Preparing children aged 5-6 with a curriculum that includes literacy and social skills.</p>
                    <p><strong>Schedule:</strong> Mon-Fri, 9 AM - 3 PM</p>
                </div>
            </div>
        </section>

        <section id="admission" aria-labelledby="admissionHeading">
            <h2 id="admissionHeading">Admission Form</h2>
            <form id="admission-form" aria-describedby="formResponse">
                <label for="child-name">Child's Name:</label>
                <input type="text" id="child-name" name="child-name" required>

                <label for="parent-name">Parent's Name:</label>
                <input type="text" id="parent-name" name="parent-name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required>

                <label for="birthdate">Child's Birthdate:</label>
                <input type="date" id="birthdate" name="birthdate" required>

                <button type="submit">Submit</button>
            </form>
            <p id="form-response"></p>
        </section>

        <section id="contact" aria-labelledby="contactHeading">
            <h2 id="contactHeading">Contact Us</h2>
            <form id="contactForm" aria-describedby="formResponseContact">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send</button>
            </form>
            <div id="formResponse"></div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 Som Valley Preschool. All rights reserved.</p>
        </div>
    </footer>

    <script src="script3.js"></script>
</body>
</html>
 -->
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Som Valley Preschool</title>
    <link rel="stylesheet" href="styles1.css">
    <link rel="icon" type="image/x-icon" href="favicon-32x32.png">
    

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        header {
            background-color: #2d2a5e;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .logo {
            max-width: 120px;
            height: auto;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 15px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
        }
        .carousel {
            position: relative;
            max-width: 600px;
            margin: 20px auto;
            overflow: hidden;
            border-radius: 10px;
        }
        .carousel-images img {
            width: 100%;
            display: none;
        }
        .carousel-images img.active {
            display: block;
        }
        .carousel-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            cursor: pointer;
            padding: 10px;
        }
        #prevBtn {
            left: 10px;
        }
        #nextBtn {
            right: 10px;
        }
        section {
            padding: 20px;
            margin: 10px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        footer {
            text-align: center;
            padding: 20px;
            background-color: #4CAF50;
            color: white;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <img src="C:\Users\parth\Downloads\logo.jpeg" alt="Som Valley Preschool Logo" class="logo">
            <h1 >Welcome to Som Valley Preschool</h1>
            <p id="greeting" aria-live="polite"></p>
            <nav>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#programs">Our Programs</a></li>
                    <li><a href="#admission">Admissions</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section class="carousel" aria-label="Image carousel">
            <div class="carousel-images">
                <img src= "C:\Users\parth\Downloads\img2.jpeg" alt="Children engaged in preschool activities" class="active">
                <img src="C:\Users\parth\Downloads\img1.jpeg" alt="Happy children playing together">
                <img src="image3.jpg" alt="Classroom with children learning">
                <!-- <video src="C:\Users\parth\Downloads\video1.mp4" alt="video" -->
            </div>
            <button id="prevBtn" class="carousel-button" aria-label="Previous image">Prev</button>
            <button id="nextBtn" class="carousel-button" aria-label="Next image">Next</button>
            <!-- <button id="prevBtn" class="carousel-button" aria-label="Previous video">Prev</button>
            <button id="nextBtn" class="carousel-button" aria-label="Next video">Next</button> -->
        </section>
        <section id="video">
            <h2>Watch Our Intro Video</h2>
            <video controls>
                <source src="C:\Users\parth\Downloads\video1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </section>
        

        <section class="quote" aria-labelledby="quoteHeading">
            <h2 id="quoteHeading">Quote of the Day</h2>
            <p id="dailyQuote">"Every child is a different kind of flower, and all together, make this world a beautiful garden."</p>
        </section>
        <style>
            body {
              background-image: url('img_girl.jpg');
            }
            </style>

        <section id="about" aria-labelledby="aboutHeading">
            <h2 id="aboutHeading">About Us</h2>
            <p>At Som Valley Preschool, our mission is to provide a nurturing and stimulating environment where young children can develop their cognitive, emotional, and social skills.</p>
            <h3>Meet Our Team</h3>
            <div class="team-members">
                <div class="team-member">
                    <img src="teacher1.jpg" alt="Lead Teacher" style="width: 100px; height: auto;">
                    <h4>Lead Teacher</h4>
                </div>
                <div class="team-member">
                    <img src="teacher2.jpg" alt="Assistant Teacher" style="width: 100px; height: auto;">
                    <h4>Assistant Teacher</h4>
                </div>
            </div>
        </section>

        <section id="programs" aria-labelledby="programsHeading">
            <h2 id="programsHeading">Our Programs</h2>
            <div class="program-list">
                <div class="program">
                    <h3>Preschool Prep</h3>
                    <p>A fun and engaging program designed for children aged 3-4.</p>
                    <p><strong>Schedule:</strong> Mon-Fri, 9 AM - 12 PM</p>
                </div>
                <div class="program">
                    <h3>Junior Explorers</h3>
                    <p>For children aged 4-5, emphasizing early literacy and hands-on learning.</p>
                    <p><strong>Schedule:</strong> Mon-Fri, 12 PM - 3 PM</p>
                </div>
                <div class="program">
                    <h3>Kindergarten Readiness</h3>
                    <p>Preparing children aged 5-6 with a curriculum that includes literacy and social skills.</p>
                    <p><strong>Schedule:</strong> Mon-Fri, 9 AM - 3 PM</p>
                </div>
            </div>
        </section>

        <section id="admission" aria-labelledby="admissionHeading">
            <h2 id="admissionHeading">Admission Form</h2>
            <form id="admission-form" aria-describedby="formResponse">
                <label for="child-name">Child's Name:</label>
                <input type="text" id="child-name" name="child-name" required>

                <label for="parent-name">Parent's Name:</label>
                <input type="text" id="parent-name" name="parent-name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required>

                <label for="birthdate">Child's Birthdate:</label>
                <input type="date" id="birthdate" name="birthdate" required>

                <button type="submit">Submit</button>
            </form>
            <p id="form-response"></p>
        </section>

        <section id="contact" aria-labelledby="contactHeading">
            <h2 id="contactHeading">Contact Us</h2>
            <p>If you have any questions or would like to learn more about our programs, please feel free to reach out to us!</p>
            
            <div class="contact-info">
                <h3>Contact Information</h3>
                <p><strong>Address:</strong> M2 ground floor RAMAKRISHNA VIHAR APPARTMENT IP EXTENSION DELHI -110092  </p>
                <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@somvalleypreschool.com">info@somvalleypreschool.com</a></p>
                <h3>Follow Us</h3>
                <p>
                    <a href="https://www.facebook.com/SomValleyPreschool" target="_blank">Facebook</a> | 
                    <a href="https://www.instagram.com/SomValleyPreschool" target="_blank">Instagram</a> | 
                    <a href="https://www.twitter.com/SomValleyPreschool" target="_blank">Twitter</a>
                    <a href=""
                </p>
            </div>
        
            <form id="contactForm" aria-describedby="formResponseContact">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
        
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
        
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone">
        
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
        
                <button type="submit">Send</button>
            </form>
            <div id="formResponse"></div>
        </section>
        
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 Som Valley Preschool. All rights reserved.</p>
        </div>
    </footer>

    <script src="script3.js"></script>
    <script>
        // Simple carousel functionality
        const images = document.querySelectorAll('.carousel-images img');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        document.getElementById('nextBtn').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        // Display a greeting message
        document.getElementById('greeting').textContent = "We are excited to welcome your child!";
    </script>
</body>
</html>

