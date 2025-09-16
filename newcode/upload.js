// Fetch room listings from backend API
fetch('/api/rooms')
  .then(response => response.json())
  .then(rooms => {
    const container = document.getElementById('roomListings');
    if (rooms.length === 0) {
      container.innerHTML = '<p>No rooms available at the moment.</p>';
      return;
    }
    
    rooms.forEach(room => {
      const roomHTML = `
        <div class="room-card">
          <h2>R${room.price} per month</h2>
          <p><strong>Location:</strong> ${room.location}</p>
          <p><strong>Condition:</strong> ${room.condition}</p>
          <p><strong>Electricity:</strong> ${room.electricity}</p>
          ${room.photos ? `<div class="room-photos">
            ${room.photos.map(photo => `<img src="${photo}" alt="Room photo">`).join('')}
          </div>` : ''}
        </div>
      `;
      container.innerHTML += roomHTML;
    });
  })
  .catch(error => {
    console.error('Error fetching rooms:', error);
    document.getElementById('roomListings').innerHTML = '<p>Error loading rooms.</p>';
  });
