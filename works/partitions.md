---
layout: project
title: Partitions in Viva Insights
image: /src/images/partitions/banner.jpg
desc: Sub-workspaces empowering privacy
primary_color: "#3B5DB0"
secondary_color: "#e6e2e6"
role: UX, Research
duration: 3 months 
---

### The challenge

When Microsoft migrated from Workplace Analytics (WPA) to Viva Insights, one of the most important features that customers needed in the new platform was Partitions.

Partitions helps an administrator create a sub-workspace with support for targeted analyses and methods of sectioning off parts of their organisation for analysts to work on. We wanted to enable them to create such partitions in the most easy and effective way possible.


<a class="venobox" href="/src/images/partitions/homepage.png">
  <img src="/src/images/partitions/homepage.png" alt="Partitions homepage" class="img-fluid mt-2 mb-2"></a>

As of Feb 2024, Partitions is now <b>generally available</b>, and it has helped unblock the migration of our strategic and active customers (1.5+ mn licenses) to the updated platform. At the time of writing, 70+ tenants are using Partitions and have created more than 125 partitions.

<div class="mt-3"></div>

#### TLDR, to enable administrators to create partitions in Viva Insights while adhering to privacy standards and platform constraints.

<p class="text-center">
  <a href="works/partitions/#final-designs">
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


<div class="container-fluid full-width basic d-flex justify-content-center mt-5" style="overflow: hidden; align-items: center;">

<div class='col-lg-3 pb-5'>

<h5>1. Create partition</h5>
   When a new analyst is joining the team, an admin wants to create a customised partition and only provide the required data to them such that they follow the privacy standards set by their firm.

   <br><br><b><i> Hover over the image to see insights.</i></b>
</div>

<div class="col-lg-6">
<a class="venobox" data-gall="gallerya" href="/src/images/partitions/userjourney1.png">
  <div class="image-container">
    <img src="/src/images/partitions/userjourney1.png" alt="Create partition wizard" class="img-fluid original-image">
    <img src="/src/images/partitions/userjourney1_hover.png" alt="Image 2" class="img-fluid hover-image">
  </div>
</a>
  <img src="/src/images/partitions/userjourney1.png" alt="Create partition wizard" class="img-fluid">
  
</div>
</div>

<div class="container-fluid full-width basic d-flex justify-content-center mt-1" style="overflow: hidden; align-items: center;">

<div class='col-lg-3 pb-5'>
<h5>2. Select employees</h5>
   To filter the right employees so that it is easy for the admin to section off to the analysts.

   <br><br><b><i> Hover over the image to see insights.</i></b>
</div>

<div class="col-lg-6">
<a class="venobox" data-gall="gallerya" href="/src/images/partitions/userjourney2.png">
  <div class="image-container">
    <img src="/src/images/partitions/userjourney2.png" alt="Create partition wizard" class="img-fluid original-image">
    <img src="/src/images/partitions/userjourney2_hover.png" alt="Image 2" class="img-fluid hover-image">
  </div>
</a>
  <img src="/src/images/partitions/userjourney2.png" alt="Create partition wizard" class="img-fluid">
  
</div>
</div>

<div class="container-fluid full-width basic d-flex justify-content-center mt-1" style="overflow: hidden; align-items: center;">

<div class='col-lg-3 pb-5'>
<h5>3. Select attributes</h5>
   To select the right attributes and pick how that attribute should be shown to the analyst.

   <br><br><b><i> Hover over the image to see insights.</i></b>
</div>

<div class="col-lg-6">
<a class="venobox" data-gall="gallerya" href="/src/images/partitions/userjourney3.png">
  <div class="image-container">
    <img src="/src/images/partitions/userjourney3.png" alt="Create partition wizard" class="img-fluid original-image">
    <img src="/src/images/partitions/userjourney3_hover.png" alt="Image 2" class="img-fluid hover-image">
  </div>
</a>
  <img src="/src/images/partitions/userjourney3.png" alt="Create partition wizard" class="img-fluid">
  
</div>
</div>

<div class="container-fluid full-width basic d-flex justify-content-center mt-1" style="overflow: hidden; align-items: center;">

<div class='col-lg-3 pb-5'>
<h5>4. Select analysts</h5>
   To find the right analysts and assign them the partition.

   <br><br><b><i> Hover over the image to see insights.</i></b>
</div>

<div class="col-lg-6">
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

The user testing concluded with the following results:


<div class="container-fluid full-width d-flex justify-content-center" style="overflow: hidden; align-items: center; background-color: var(--white);">

<div class="col-lg-7">
<a class="venobox" href="/src/images/partitions/SUS.png">
    <img src="/src/images/partitions/SUS.png" alt="Usertesting" class="img-fluid"> </a>
</div>
</div>

This pointed out that people preferred single pane wizard over the step-by-step and we proceeded with the newer designs.

### Partition switcher

<div class='row' style='align-items: center;'>
<div class='col-lg-5'>
<a class="venobox" data-gall="galleryb" href="/src/images/partitions/switcher.png">
      <img src="/src/images/partitions/switcher.png" alt="Usertesting" class="img-fluid"></a>
</div>
<div class='col-lg-7'>
When an analyst handles <b>multiple partitions</b>, they need an easy way to switch between them. Thus, we needed a switcher. Our surveys indicated the side navigation as the ideal location for the switcher. 
<br><br>
A <b>dropdown</b> was the best option as it easily lays out multiple items in a list. Description was also added with every partition so that it's easier for the user to identify what partition it is.

</div>
</div>

<a class="venobox" data-gall="galleryb" href="/src/images/partitions/sidebar.png">
      <img src="/src/images/partitions/sidebar.png" alt="Usertesting" class="img-fluid"></a>

However, the challenge was to differentiate partition-specific pages from global pages to avoid confusion. We had multiple iterations for this. In the end, we decided to go with a <b>simple horizontal line</b> between the pages to make it as easy as possible for the admin to understand without complicating the navigation.

### Toggle and onboarding

The final part of our puzzle was figuring out how to let admins enable Partitions for their tenant. The tricky part over here is that, once Partitions is enabled, analysts will have to be manually assigned to at least one partition to work on Viva Insights and conduct analysis. This is a shift in paradigm for the admins as before Partitions, any analyst who was assigned Viva Insights in the Microsoft Admin Center, will automatically get access to all data. 

Educating our admins about this change without adding too much friction (so that our admins don't get scared of the feature and decide not to use it :3 ) was our final hurdle before GA.

<div class="container-fluid full-width d-flex justify-content-center" style="overflow: hidden; align-items: center; background-color: var(--white);">

<div class="col-md-7">
      <a class="venobox" data-gall="gallery3" href="/src/images/partitions/onboarding1.png">
        <img src="/src/images/partitions/onboarding1.png" alt="Image 1" class="img-fluid">
      </a>
    </div>
    </div>


 We first tried out a <b>modal experience</b> when the user first landed in the page. This explains what partitions is and how the analyst onboarding experience has been changed. We realised from our user testing that they rarely read the body text, especially when its this long. 
    
Moreover, the info is only conveyed to the admin if he enters the 'Partitions' homepage. This would lead to confusion to admins who may have not visited the page.

<div class="container-fluid full-width d-flex justify-content-center" style="overflow: hidden; align-items: center; background-color: var(--white);">

<div class="col-md-7">
      <a class="venobox" data-gall="gallery3" href="/src/images/partitions/onboarding2.png">
        <img src="/src/images/partitions/onboarding2.png" alt="Image 1" class="img-fluid">
      </a>
    </div>
    </div>


We then explored an experience where the admin can enable the setting through the <b>Partitions homepage</b>. This gives the admin an explicit message on what will happen when Partitions is enabled for their tenant. 
    
The problem with this approach was since Partitions is an opt-in feature and is a highly data-sensitive one at it, the team did not prefer the idea of keeping the Partitions tab easily accessible.

<div class="container-fluid full-width d-flex justify-content-center" style="overflow: hidden; align-items: center; background-color: var(--white);">

<div class="col-md-7">
      <a class="venobox" data-gall="gallery3" href="/src/images/partitions/onboarding3.png">
        <img src="/src/images/partitions/onboarding3.png" alt="Image 1" class="img-fluid">
      </a>
    </div>
    </div>


This brought us to the final experience which got shipped. Over here, the user has to navigate to <b>Privacy settings</b> and toggle on Partitions to enable it for their tenant. Once toggled, the user will be presented with a info modal, which explains how it will affect the tenant. <br><br>Finally, as an additional measure, the user has to click on 'Save changes' to confirm the enablement of the feature.

<div class="container-fluid full-width secondary d-flex justify-content-center mt-5" style="overflow: hidden; align-items: center;">
    <div class="col-lg-4 text-center">
      <h1> FINAL DESIGNS </h1>
    </div>
</div>

<div class="container-fluid full-width secondary d-flex justify-content-center" style="overflow: hidden; align-items: center;">

<div class='col-lg-2 pb-5'>
<h5>Homepage</h5>
   The admin would come here to manage see the health of all of their partitions.
</div>

  <div class="col-md-6">
    
      <a class="venobox" data-gall="homepage" href="/src/images/partitions/homepage-b.png">
      <img src="/src/images/partitions/homepage-b.png" alt="Image 2" class="img-fluid">
    </a>
     <a class="venobox" data-gall="homepage" href="/src/images/partitions/homepage-a.png" style="display: none;">
      <img src="/src/images/partitions/homepage-a.png" alt="Image 1" class="img-fluid">
    </a>
    <a class="venobox" data-gall="homepage" href="/src/images/partitions/homepage-b.png" style="display: none;">
      <img src="/src/images/partitions/homepage-b.png" alt="Image 2" class="img-fluid">
    </a>
  </div>
</div>

<div class="container-fluid full-width d-flex justify-content-center" style="overflow: hidden; align-items: center;">

    <a class="venobox" data-gall="filters" href="/src/images/partitions/filters-a.png" style="display: none;">
      <img src="/src/images/partitions/attr-a.png" alt="Image 1" class="img-fluid">
    </a>
    <a class="venobox" data-gall="filters" href="/src/images/partitions/filters-b.png" style="display: none;">
      <img src="/src/images/partitions/attr-b.png" alt="Image 2" class="img-fluid">
    </a>
    <a class="venobox" data-gall="filters" href="/src/images/partitions/filters-ab.png" style="display: none;">
      <img src="/src/images/partitions/attr-b.png" alt="Image 2" class="img-fluid">
    </a>

  <div class='col-lg-2'>
    <h5>Creating filters</h5>
   This is the Create a partition page. The admin would come here to select filters to apply to the partition, which will define what type of users will go into the partition.
  </div>

  <div class="col-md-6">
    
      <a class="venobox" data-gall="filters" href="/src/images/partitions/filters-b.png">
      <img src="/src/images/partitions/filters-b.png" alt="Image 2" class="img-fluid">
    </a>
  </div>

</div>

<div class="container-fluid full-width d-flex justify-content-center" style="overflow: hidden; align-items: center;">

<div class='col-lg-2 pb-5'>
<h5>Selecting attributes</h5>
   This is the attribute selection page. The admin would come here to select attributes which are applicable inside the partition, which will define what subset of attributes will be available in the partition.
</div>

    <a class="venobox" data-gall="attr" href="/src/images/partitions/attr-a.png" style="display: none;">
      <img src="/src/images/partitions/attr-a.png" alt="Image 1" class="img-fluid">
    </a>
    <a class="venobox" data-gall="attr" href="/src/images/partitions/attr-b.png" style="display: none;">
      <img src="/src/images/partitions/attr-b.png" alt="Image 2" class="img-fluid">
    </a>

  <div class="col-md-6">
    
      <a class="venobox" data-gall="attr" href="/src/images/partitions/attr-b.png">
      <img src="/src/images/partitions/attr-b.png" alt="Image 2" class="img-fluid">
    </a>
  </div>
</div>

<div class="container-fluid full-width d-flex justify-content-center" style="overflow: hidden; align-items: center;">

  <div class='col-lg-2 pb-5'>
    <h5>Selecting users</h5>
    This is the user selection page. The admin would come here to select which analysts can access the partition.
  </div>

  <div class="col-md-6">
    
      <a class="venobox" data-gall="users" href="/src/images/partitions/users-b.png">
      <img src="/src/images/partitions/users-b.png" alt="Image 2" class="img-fluid">
    </a>

    <a class="venobox" data-gall="users" href="/src/images/partitions/users-a.png" style="display: none;">
      <img src="/src/images/partitions/users-a.png" alt="Image 1" class="img-fluid">
    </a>
    <a class="venobox" data-gall="users" href="/src/images/partitions/users-b.png" style="display: none;">
      <img src="/src/images/partitions/users-b.png" alt="Image 2" class="img-fluid">
    </a>
  </div>

</div>