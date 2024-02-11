---
layout: project
title: Partitions in Viva Insights
image: /src/images/partitions/banner.jpg
desc: Sub-workspaces empowering privacy
primary_color: "#3B5DB0"
role: UX, Research
duration: 3 months 
---

### The challenge

When Microsoft migrated from Workplace Analytics (WPA) to Viva Insights, one of the most important features that users needed in the new platform was Partitions.

Partitions helps an administrator create a sub-workspace with support for targeted analyses and methods of sectioning off parts of their organisation for analysts to work on. We wanted to enable them to create such partitions in the most easy and effective way possible.


<a class="venobox" href="/src/images/partitions/homepage.png">
  <img src="/src/images/partitions/homepage.png" alt="Partitions homepage" class="img-fluid mt-2 mb-2"></a>

As of Feb 2024, Partitions is now <b>generally available</b>, and it has helped unblock the migration of our strategic and active customers (1.5+ mn licenses) to the updated platform. At the time of writing, 70+ tenants are using Partitions and have created more than 125 partitions.

<div class="mt-3"></div>

#### TLDR, to enable administrators to create partitions in Viva Insights while adhering to privacy standards and platform constraints.

<p class="text-center">
  <a href="works/partitions/#user-flow">
    <button class="btn mt-3 btn-viva">Skip to designs</button>
  </a>
</p>

<!-- ### Design process

<div class="row">
    <div class="col-sm-3">
        <img class='img-fluid' src="/src/images/partitions/process1.png" alt="Process 1">
    </div>
    <div class="col-sm-3">
        <img class='img-fluid' src="/src/images/partitions/process2.png" alt="Process 2">
    </div>
    <div class="col-sm-3">
        <img class='img-fluid' src="/src/images/partitions/process3.png" alt="Process 3">
    </div>
    <div class="col-sm-3">
        <img class='img-fluid' src="/src/images/partitions/process4.png" alt="Process 4">
    </div>
</div> -->

### Understanding the existing platform

I started off by looking at how Partitions worked in <b>Workplace Analytics (WPA)</b>. This gave me a better understanding how an administrator approached this feature and what their painpoints were.
A typical partition assignment included 4 major steps. I was to focus on the CRUD experience of the feature, keeping usability and design finesse in mind.


<div class="container-fluid full-width d-flex justify-content-center mt-5" style="border-radius:10px;overflow: hidden; align-items: center; background-color: #DCDCDC;">

<div class='col-lg-3 pb-5'>
<b>1. Create partition</b>:
   When a new analyst is joining the team, an admin wants to create a customised partition and only provide the required data to them such that they follow the privacy standards set by their firm.

   <br><br><b><i>You can hover over the image to see insights.</i></b>
</div>

<div class="col-lg-8">
<a class="venobox" data-gall="gallerya" href="/src/images/partitions/userjourney1.png">
  <div class="image-container">
    <img src="/src/images/partitions/userjourney1.png" alt="Create partition wizard" class="img-fluid original-image">
    <img src="/src/images/partitions/userjourney1_hover.png" alt="Image 2" class="img-fluid hover-image">
  </div>
</a>
  <img src="/src/images/partitions/userjourney1.png" alt="Create partition wizard" class="img-fluid">
  
</div>
</div>

<div class="container-fluid full-width d-flex justify-content-center mt-5" style="border-radius:10px;overflow: hidden; align-items: center; background-color: #DCDCDC;">

<div class='col-lg-3 pb-5'>
<b>2. Select employees</b>:
   To filter the right employees so that it is easy for the admin to section off to the analysts.

   <br><br><b><i>You can hover over the image to see insights.</i></b>
</div>

<div class="col-lg-8">
<a class="venobox" data-gall="gallerya" href="/src/images/partitions/userjourney2.png">
  <div class="image-container">
    <img src="/src/images/partitions/userjourney2.png" alt="Create partition wizard" class="img-fluid original-image">
    <img src="/src/images/partitions/userjourney2_hover.png" alt="Image 2" class="img-fluid hover-image">
  </div>
</a>
  <img src="/src/images/partitions/userjourney2.png" alt="Create partition wizard" class="img-fluid">
  
</div>
</div>

<div class="container-fluid full-width d-flex justify-content-center mt-5" style="border-radius:10px;overflow: hidden; align-items: center; background-color: #DCDCDC;">

<div class='col-lg-3 pb-5'>
<b>3. Select attributes</b>:
   To select the right attributes and pick how that attribute should be shown to the analyst.

   <br><br><b><i>You can hover over the image to see insights.</i></b>
</div>

<div class="col-lg-8">
<a class="venobox" data-gall="gallerya" href="/src/images/partitions/userjourney3.png">
  <div class="image-container">
    <img src="/src/images/partitions/userjourney3.png" alt="Create partition wizard" class="img-fluid original-image">
    <img src="/src/images/partitions/userjourney3_hover.png" alt="Image 2" class="img-fluid hover-image">
  </div>
</a>
  <img src="/src/images/partitions/userjourney3.png" alt="Create partition wizard" class="img-fluid">
  
</div>
</div>

<div class="container-fluid full-width d-flex justify-content-center mt-5" style="border-radius:10px;overflow: hidden; align-items: center; background-color: #DCDCDC;">

<div class='col-lg-3 pb-5'>
<b>4. Select analysts</b>:
   To find the right analysts and assign them the partition.

   <br><br><b><i>You can hover over the image to see insights.</i></b>
</div>

<div class="col-lg-8">
<a class="venobox" data-gall="gallerya" href="/src/images/partitions/userjourney4.png">
  <div class="image-container">
    <img src="/src/images/partitions/userjourney4.png" alt="Create partition wizard" class="img-fluid original-image">
    <img src="/src/images/partitions/userjourney4_hover.png" alt="Image 2" class="img-fluid hover-image">
  </div>
</a>
  <img src="/src/images/partitions/userjourney4.png" alt="Create partition wizard" class="img-fluid">
  
</div>
</div>

### Measuring usability through SUS
One of the key decisions which we had to make was to go forward with the current step-by-step wizard or design a new single pane wizard. For this, we conducted an <b>unmoderated user testing</b> on Usertesting.com.

For evaluating this, we conducted a <b>System Usability Scale testing</b>. For the uninitiated, it's a widely used method for evaluating the usability and user-friendliness of a system or software application. SUS testing involves surveying users and asking them to rate the system's usability based on a standardised questionnaire. The results are then analysed to assess the overall user satisfaction and usability of the system.

<a class="venobox" data-gall="galleryb" href="/src/images/partitions/usertesting.png">
      <img src="/src/images/partitions/usertesting.png" alt="Usertesting" class="img-fluid"></a>

The user testing concluded with the following results:

For step-by-step → 82.5

For single pane → 92.5

This pointed out that people preferred single pane wizard over the step-by-step and we proceeded with the newer designs.

### Partition switcher

<div class='row' style='align-items: center;'>
<div class='col-lg-5'>
<a class="venobox" data-gall="galleryb" href="/src/images/partitions/switcher.png">
      <img src="/src/images/partitions/switcher.png" alt="Usertesting" class="img-fluid"></a>
</div>
<div class='col-lg-7'>
When an analyst handles multiple partitions, they need an easy way to switch between them. Thus, we needed a switcher. Our surveys indicated the side navigation as the ideal location for the switcher. However, the challenge was to differentiate partition-specific pages from global pages to avoid user confusion.
<br><br>
We had multiple iterations for this.
</div>
</div>

<a class="venobox" data-gall="galleryb" href="/src/images/partitions/sidebar.png">
      <img src="/src/images/partitions/sidebar.png" alt="Usertesting" class="img-fluid"></a>

In the end, we decided to go with a simple horizontal line between the pages to make it as simple and easy for the user to understand without complicating the navigation.

### Toggle and onboarding

### User flow

<div class="mt-2 mb-4"></div>

###### Homepage

<div class="row">
  <div class="col-md-6">
    <a class="venobox" data-gall="gallery1" href="/src/images/partitions/homepage-a.png">
      <img src="/src/images/partitions/homepage-a.png" alt="Image 1" class="img-fluid">
    </a>
    <div class="text-center">
      <img src="/src/images/partitions/WPA.svg" alt="Logo 1" class="logo mt-2">
    </div>
  </div>

  <div class="col-md-6">
    <a class="venobox" data-gall="gallery1" href="/src/images/partitions/homepage-b.png">
      <img src="/src/images/partitions/homepage-b.png" alt="Image 2" class="img-fluid">
    </a>
    <div class="text-center">
      <img src="/src/images/partitions/VI.svg" alt="Logo 2" class="logo mt-2">
    </div>
      <a class="venobox" data-gall="gallery1" href="/src/images/partitions/homepage-ab.png" style="display: none;">
      <img src="/src/images/partitions/homepage-ab.png" alt="Image 2" class="img-fluid">
    </a>
  </div>
</div>

<div class="mt-4"></div>

This is the Partitions homepage. The admin would come here to manage their partitions, and see the health of all of their partitions.

<div class="mt-4"></div>

###### Create partition: Creating filters

<div class="row">
  <div class="col-md-6">
    <a class="venobox" data-gall="gallery2" href="/src/images/partitions/filters-a.png">
      <img src="/src/images/partitions/filters-a.png" alt="Image 1" class="img-fluid">
    </a>
    <div class="text-center">
      <img src="/src/images/partitions/WPA.svg" alt="Logo 1" class="logo mt-2">
    </div>
  </div>

  <div class="col-md-6">
    <a class="venobox" data-gall="gallery2" href="/src/images/partitions/filters-b.png">
      <img src="/src/images/partitions/filters-b.png" alt="Image 2" class="img-fluid">
    </a>
    <div class="text-center">
      <img src="/src/images/partitions/VI.svg" alt="Logo 2" class="logo mt-2">
    </div>
      <a class="venobox" data-gall="gallery2" href="/src/images/partitions/filters-ab.png" style="display: none;">
      <img src="/src/images/partitions/filters-ab.png" alt="Image 2" class="img-fluid">
    </a>
  </div>
</div>

<div class="mt-4"></div>

This is the Create a partition page. The admin would come here to select filters to apply to the partition, which will define what type of users will go into the partition.

<div class="mt-4"></div>

###### Create partition: Selecting attributes

<div class="row">
  <div class="col-md-6">
    <a class="venobox" data-gall="gallery3" href="/src/images/partitions/attr-a.png">
      <img src="/src/images/partitions/attr-a.png" alt="Image 1" class="img-fluid">
    </a>
    <div class="text-center">
      <img src="/src/images/partitions/WPA.svg" alt="Logo 1" class="logo mt-2">
    </div>
  </div>

  <div class="col-md-6">
    <a class="venobox" data-gall="gallery3" href="/src/images/partitions/attr-b.png">
      <img src="/src/images/partitions/attr-b.png" alt="Image 2" class="img-fluid">
    </a>
    <div class="text-center">
      <img src="/src/images/partitions/VI.svg" alt="Logo 2" class="logo mt-2">
    </div>
      <a class="venobox" data-gall="gallery3" href="/src/images/partitions/attr-ab.png" style="display: none;">
      <img src="/src/images/partitions/attr-ab.png" alt="Image 2" class="img-fluid"></a>
      <a class="venobox" data-gall="gallery3" href="/src/images/partitions/attr-c.png" style="display: none;">
      <img src="/src/images/partitions/attr-c.png" alt="Image 2" class="img-fluid"></a>
      <a class="venobox" data-gall="gallery3" href="/src/images/partitions/attr-d.png" style="display: none;">
      <img src="/src/images/partitions/attr-d.png" alt="Image 2" class="img-fluid"></a>
  </div>
</div>

<div class="mt-4"></div>

This is the attribute selection page. The admin would come here to select attributes which are applicable inside the partition, which will define what subset of attributes will be available in the partition.

<div class="mt-4"></div>

###### Create partition: Selecting users

<div class="row">
  <div class="col-md-6">
    <a class="venobox" data-gall="gallery4" href="/src/images/partitions/users-a.png">
      <img src="/src/images/partitions/users-a.png" alt="Image 1" class="img-fluid">
    </a>
    <div class="text-center">
      <img src="/src/images/partitions/WPA.svg" alt="Logo 1" class="logo mt-2">
    </div>
  </div>

  <div class="col-md-6">
    <a class="venobox" data-gall="gallery4" href="/src/images/partitions/users-b.png">
      <img src="/src/images/partitions/users-b.png" alt="Image 2" class="img-fluid">
    </a>
    <div class="text-center">
      <img src="/src/images/partitions/VI.svg" alt="Logo 2" class="logo mt-2">
    </div>
      <a class="venobox" data-gall="gallery4" href="/src/images/partitions/users-ab.png" style="display: none;">
      <img src="/src/images/partitions/users-ab.png" alt="Image 2" class="img-fluid"></a>
      <a class="venobox" data-gall="gallery4" href="/src/images/partitions/users-c.png" style="display: none;">
      <img src="/src/images/partitions/users-c.png" alt="Image 2" class="img-fluid"></a>
      <a class="venobox" data-gall="gallery4" href="/src/images/partitions/users-d.png" style="display: none;">
      <img src="/src/images/partitions/users-d.png" alt="Image 2" class="img-fluid"></a>
  </div>
</div>

<div class="mt-4"></div>

This is the user selection page. The admin would come here to select which analysts can access the partition.

<div class="mt-4"></div>

###### Error scenarios

<div class="row">
  <div class="col-md-6">
    <a class="venobox" data-gall="gallery6" href="/src/images/partitions/error-a.png">
      <img src="/src/images/partitions/error-a.png" alt="Image 1" class="img-fluid">
    </a>
    <div class="text-center">
      <img src="/src/images/partitions/WPA.svg" alt="Logo 1" class="logo mt-2">
    </div>
  </div>

  <div class="col-md-6">
    <a class="venobox" data-gall="gallery6" href="/src/images/partitions/error-b.png">
      <img src="/src/images/partitions/error-b.png" alt="Image 2" class="img-fluid">
    </a>
    <div class="text-center">
      <img src="/src/images/partitions/VI.svg" alt="Logo 2" class="logo mt-2">
    </div>
      <a class="venobox" data-gall="gallery6" href="/src/images/partitions/error-ab.png" style="display: none;">
      <img src="/src/images/partitions/error-ab.png" alt="Image 2" class="img-fluid">
    </a>
  </div>
</div>

<div class="mt-4"></div>

This is the error scenarios.