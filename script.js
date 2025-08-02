        // Prosta obsługa animacji
        console.log("Skrypt załadowany");
        // Obsługa kalkulatora
        document.getElementById('calorie-form').addEventListener('submit', function(e) {
            e.preventDefault();
            console.log("Kalkulator submit handler działa");
            // Pobieranie danych
            const gender = document.getElementById('gender').value;
            const age = parseInt(document.getElementById('age').value);
            const height = parseInt(document.getElementById('height').value);
            const weight = parseInt(document.getElementById('weight').value);
            const activity = parseFloat(document.getElementById('activity').value);
            const goal = parseInt(document.getElementById('goal').value);
            
            // Obliczenia
            let bmr;
            if (gender === 'male') {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }
            
            const tdee = Math.round(bmr * activity);
            const finalCalories = tdee + goal;
            
            // Wyświetlanie wyników
            document.getElementById('bmr').textContent = Math.round(bmr);
            document.getElementById('tdee').textContent = tdee;
            document.getElementById('final-calories').textContent = finalCalories;
            
            // Ustawienie tekstu celu
            document.getElementById('goal-text').textContent = 
                goal === -500 ? 'Redukcja wagi' : 
                goal === 0 ? 'Utrzymanie wagi' : 'Przyrost masy';
            
            // Pokazanie wyników
            document.getElementById('result').style.display = 'block';
        });
        
        // Obsługa formularza kontaktowego
        document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Walidacja pól
    if (!name || !email || !message) {
        alert("Proszę wypełnić wszystkie pola formularza");
        return;
    }

    // Poprawne formatowanie URL z użyciem encodeURIComponent
    const subject = `Wiadomość od ${encodeURIComponent(name)}`;
    const body = `${encodeURIComponent(message)}%0D%0A%0D%0AKontakt: ${encodeURIComponent(email)}`;
    
    // Tworzenie tymczasowego linku
    const mailtoLink = `mailto:rittermateusz29@gmail.com?subject=${subject}&body=${body}`;
    
    // Bezpieczne otwieranie mailto
    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
});
        
   // slider*//
   
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;
  let autoSlideInterval;

  // Funkcja pokazująca slajd
  function showSlide(index) {
    // Ukrywamy wszystkie slajdy
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Pokazujemy aktualny slajd
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  // Automatyczne przewijanie

  function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    }, 3000);
  }

  // Ręczna zmiana slajdu
  function goToSlide(index) {
  stopAutoSlide();       
  showSlide(index);
  startAutoSlide();
}

  // Event listeners
  prevBtn.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  });

  nextBtn.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  });

  // Event listeners dla kropek
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });

  document.getElementById('contactBtn').addEventListener('click', function () {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
});