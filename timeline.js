document.addEventListener("DOMContentLoaded", function() {
  const timelineData = {
      "timeline": [
        {
          "title": "End of World War II (1945)",
            "date": "1945-09-02",
            "description": "The formal surrender of Japan marks the end of World War II.",
            "image": "https://example.com/ww2.jpg"  
          
        },  
        {
              "title": "Invention of Xylophone (1947)",
              "date": "1947-04-12",
              "description": "The invention of the first modern xylophone revolutionized musical instruments.",
              "image": "https://example.com/xylophone.jpg"
          },
          
          {
              "title": "Release of iPhone (2007)",
              "date": "2007-06-29",
              "description": "Apple introduced the iPhone, a revolutionary device that changed the smartphone industry.",
              "image": "https://example.com/iphone.jpg"
          },
          {
              "title": "First Exoplanet Discovered (1995)",
              "date": "1995-10-06",
              "description": "The first confirmed detection of an exoplanet was announced, opening new possibilities in astronomy.",
              "image": "https://example.com/exoplanet.jpg"
          },
          {
              "title": "End of World War II (1945)",
              "date": "1945-09-02",
              "description": "The formal surrender of Japan marks the end of World War II.",
              "image": "https://example.com/ww2.jpg"
          },
          {
              "title": "Launch of Hubble Space Telescope (1990)",
              "date": "1990-04-24",
              "description": "The Hubble Space Telescope, one of the largest and most versatile, is launched into low Earth orbit.",
              "image": "https://example.com/hubble.jpg"
          },
          {
              "title": "Google Founded (1998)",
              "date": "1998-09-04",
              "description": "Larry Page and Sergey Brin founded Google, which became the most widely used web-based search engine.",
              "image": "https://example.com/google.jpg"
          },
          {
              "title": "First Moon Landing (1969)",
              "date": "1969-07-20",
              "description": "Apollo 11 successfully landed the first humans on the Moon.",
              "image": "https://example.com/moon-landing.jpg"
          },
          {
              "title": "Invention of the Internet (1969)",
              "date": "1969-10-29",
              "description": "The first ARPANET link is established, considered the birth of the internet.",
              "image": "https://example.com/internet.jpg"
          },
          {
              "title": "Discovery of DNA Structure (1953)",
              "date": "1953-02-28",
              "description": "James Watson and Francis Crick discovered the double helix structure of DNA.",
              "image": "https://example.com/dna.jpg"
          },
          {
              "title": "Release of Windows 95 (1995)",
              "date": "1995-08-24",
              "description": "Microsoft released Windows 95, revolutionizing personal computing.",
              "image": "https://example.com/windows95.jpg"
          },
          {
              "title": "World Wide Web Invented (1989)",
              "date": "1989-03-12",
              "description": "Tim Berners-Lee invented the World Wide Web at CERN.",
              "image": "https://example.com/www.jpg"
          },
          {
              "title": "Fall of Berlin Wall (1989)",
              "date": "1989-11-09",
              "description": "The Berlin Wall fell, symbolizing the end of the Cold War.",
              "image": "https://example.com/berlin-wall.jpg"
          },
          {
              "title": "Release of PlayStation (1994)",
              "date": "1994-12-03",
              "description": "Sony released the PlayStation, marking a new era in gaming consoles.",
              "image": "https://example.com/playstation.jpg"
          },
          {
          "title": "SpaceX Founded (2002)",
              "date": "2002-03-14",
              "description": "SpaceX was founded with the mission to reduce space transportation costs to enable the colonization of Mars.",
              "image": "https://example.com/spacex.jpg"
            },
          {
              "title": "COVID-19 Pandemic (2019)",
              "date": "2019-12-01",
              "description": "The COVID-19 pandemic caused by the novel coronavirus alters daily life globally.",
              "image": "https://example.com/covid-19.jpg"
          }
          
      ]
  };
  function createTimeline(data) {
    const timelineElement = document.getElementById("timeline");
    timelineElement.classList.add("timeline");

    data.timeline.forEach(event => {
      const eventElement = document.createElement("div");
      eventElement.className = "timeline-event";

      const yearElement = document.createElement("h2");
      yearElement.textContent = event.date.substring(0, 4);
      yearElement.className = "event-year";

      const titleElement = document.createElement("h3");
      titleElement.textContent = event.title;
      titleElement.className = "event-title";

      const imageElement = document.createElement("img");
      imageElement.src = event.image;
      imageElement.alt = event.title;
      imageElement.className = "event-image";

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = event.description;
      descriptionElement.className = "event-description";

      eventElement.appendChild(yearElement);
      eventElement.appendChild(titleElement);
      eventElement.appendChild(imageElement);
      eventElement.appendChild(descriptionElement);

      timelineElement.appendChild(eventElement);
    });

    let currentEventIndex = 0;
    let eventsPerPage = 3; // Number of events to display

    function showEvent() {
      const events = document.querySelectorAll('.timeline-event');
      events.forEach((event, index) => {
        if (index >= currentEventIndex && index < currentEventIndex + eventsPerPage) {
          event.style.display = 'block';
        } else {
          event.style.display = 'none';
        }
      });
    }

    function showPreviousEvent() {
      currentEventIndex = Math.max(0, currentEventIndex - 1);
      showEvent();
    }

    function showNextEvent() {
      const events = document.querySelectorAll('.timeline-event');
      if (currentEventIndex + eventsPerPage < events.length) {
        currentEventIndex++;
        showEvent();
      }
    }

    const leftArrow = document.createElement('div');
    leftArrow.className = 'arrow left-arrow';
    leftArrow.innerHTML = '&#9664;';
    leftArrow.onclick = showPreviousEvent;
    document.body.appendChild(leftArrow);

    const rightArrow = document.createElement('div');
    rightArrow.className = 'arrow right-arrow';
    rightArrow.innerHTML = '&#9654;';
    rightArrow.onclick = showNextEvent;
    document.body.appendChild(rightArrow);

    // Adjusting arrow positions
    leftArrow.style.left = '10px'; // Adjust as needed
    rightArrow.style.right = '10px'; // Adjust as needed

    showEvent();
  }

  createTimeline(timelineData);
});