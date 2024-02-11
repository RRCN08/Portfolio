---
layout: project
title: Ishan Dhwani
image: /src/images/ishandhwani/banner.jpg
desc: Soundscape for Assamese dialects.
primary_color: "#DB2C47"
role: UX, Research
duration: 5 months
---

### Explore the soundscape

Take a spin around the project! It's completely interactive with audio intact.

<div class="container-fluid ishan-iframe mt-5" style="border-radius:10px;overflow: hidden;">
<iframe src="/works/IshanDhvani/iframe.html" width="100%" height="950px" allowfullscreen></iframe>
</div>

<div class="mt-5"></div>

### The challenge

As a second-year student at IIT Guwahati, we had our first-semester thesis project for four months. I worked under Dr Abhishek Shrivastava to represent the various dialects, demographics, and recordings of the Assamese language in a suitable medium.

The project was based on an ongoing research project at the time, under Dr Priyankoo Sarmah, which studied the effects of socio-linguistic factors on vowel pattern variation across different dialects of Assamese.

<div class="mt-2"></div>

##### TLDR, to create a soundscape interface derived from the data from a research project for anyone to access and interpret.

<div class="mt-5"></div>

### Research

##### Understanding the brief
This was the first time I had heard of soundscapes, and it was an exciting topic. I spent the initial weeks trying to gather knowledge about soundscapes and how they work.

I also spent time on the basics of data visualisation, because at the core, a soundscape is an auditory depiction of data.

##### Other soundscapes
After the preliminary research, I was to find and analyse the existing designs out there.

I came across 2 of them, which seemed interesting.

<span color: {{ page.primary_color }};> Hover over the images to see the key points. </span>

I also spent time on the basics of data visualisation, because at the core, a soundscape is an auditory depiction of data.

###### Soundsslike Project
They used small dots as identifiers for sounds. On click, it plays the audio along with details about the place.

###### Soundscape World
They had a different approach. It consists of a player with multiple buttons and a lot more control of the audio. These were categorised into the nature of the sound. This design was completely different from Soundsslike.

<div class="mt-5"></div>

### Setting the premise

##### The research report

The original report from the research is now published and available over at [ResearchGate](https://www.researchgate.net/publication/293544030_A_Sociolinguistic_study_of_Lexical_variation_in_Assamese).

I spent around a couple of weeks going through this report multiple times, understanding phonetics and how linguistics works. There were a few things that could be easily represented for the end-user.

##### The concept

I decided to divide the design into three sections. These had different colours, indicating the data is different from one another. I started with some concept sketches.

<div class="mt-4"></div>
###### Dialects tab

![Zoom screenshot](/src/images/ishandhwani/dialects.jpg){:class="img-fluid"}

The user can listen to speech recordings from various districts of Assam. These, when clicked, show a pop-up with multiple play buttons placed accurately.

<div class="mt-4"></div>
###### Listen tab

![Zoom screenshot](/src/images/ishandhwani/listen.jpg){:class="img-fluid"}

Shows the different dialects across the state. One can hover over a region to see what variety they speak, their popularity and how proud they are of their language.

<div class="mt-4"></div>
###### Words tab

![Zoom screenshot](/src/images/ishandhwani/words.jpg){:class="img-fluid"}

Shows the distribution of lexical terms. Twelve terms were selected, which had multiple synonyms to study the usage of these words in different regions. We put these terms in a grid, and we showed the distribution using a gradient. The darker the shade, the more frequent the word was used in that region.

<div class="mt-4"></div>

###### Design language

As I converged on to my final design, I needed to set a design language to be followed throughout the entire page.

Cod Gray is the primary background colour to be easy on the eye.

Torch Red was used as the primary colour for Listen tab to invoke stimulation since the page’s function is auditory.

Jade Green was used to showcase the words to represent information.

Azure Blue was encompassed in dialects to show the abundance of varieties.

<div class="mt-5"></div>

### Final designs
The platform was developed using HTML5, with Bootstrap 4 as the front-end framework for CSS. JavaScript, accompanied by the jQuery library, was used to handle the back-end of the website. It is currently hosted on GitHub pages.

<!--Carousel Wrapper-->
<div id="final-wireframes" class="carousel slide mt-5" data-ride="carousel">

<!--Slides-->
<div class="carousel-inner">
<div class="carousel-item active">
    <a class="venobox" data-gall="gallery1" href="src/images/ishandhwani/Screen1.jpg"><img loading="lazy" class="d-block w-100" src="src/images/ishandhwani/Screen1.jpg" alt="image alt"/></a>
</div>
<div class="carousel-item">
    <a class="venobox" data-gall="gallery1" href="src/images/ishandhwani/Screen2.jpg"><img loading="lazy" class="d-block w-100" src="src/images/ishandhwani/Screen2.jpg" alt="image alt"/></a>
</div>
<div class="carousel-item">
    <a class="venobox" data-gall="gallery1" href="src/images/ishandhwani/Screen3.jpg"><img loading="lazy" class="d-block w-100" src="src/images/ishandhwani/Screen3.jpg" alt="image alt"/></a>
</div>
<div class="carousel-item">
    <a class="venobox" data-gall="gallery1" href="src/images/ishandhwani/Screen4.jpg"><img loading="lazy" class="d-block w-100" src="src/images/ishandhwani/Screen4.jpg" alt="image alt"/></a>
</div>
<div class="carousel-item">
    <a class="venobox" data-gall="gallery1" href="src/images/ishandhwani/Screen5.jpg"><img loading="lazy" class="d-block w-100" src="src/images/ishandhwani/Screen5.jpg" alt="image alt"/></a>
</div>
</div>
<!--Slides-->

<!--Indicators-->
<div class="carousel-indicators">
<button type="button" data-bs-target="#final-wireframes" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#final-wireframes" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#final-wireframes" data-bs-slide-to="2" aria-label="Slide 3"></button>
<button type="button" data-bs-target="#final-wireframes" data-bs-slide-to="3" aria-label="Slide 4"></button>
<button type="button" data-bs-target="#final-wireframes" data-bs-slide-to="4" aria-label="Slide 5"></button>
</div>
<!--/.Indicators-->

<!--Controls-->
<button class="carousel-control-prev" type="button" data-bs-target="#final-wireframes" data-bs-slide="prev">
<span class="carousel-control-prev-icon" style="margin-right: 70%;" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#final-wireframes" data-bs-slide="next">
<span class="carousel-control-next-icon" style="margin-left: 70%;" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
<!--/.Controls-->

</div>
<!--/.Carousel Wrapper-->

### Reflections
This project was a game-changer for me. I had always wanted to start with WebD, and this project was enough motivation to get started with. I have come a long way since then, creating my website entirely from scratch.

Coming to the project, there were a few shortcomings that I could have done better.

- Call to Action functions for the user is limited, and thus, interactions with the user are minimal.
- Currently, there are no ways to upload audio by the user. This means our project data cannot be crowd-sourced.
- The recordings are short and repetitive and hence doesn’t capture the user’s attention for long.

If given the time and energy, a function to record the user’s speech can be implemented. This would enhance user intractability and would also serve to crowd-sourced data. Moreover, this speech can be used to compare with other audio to determine their variety.

<div class="mt-5"></div>