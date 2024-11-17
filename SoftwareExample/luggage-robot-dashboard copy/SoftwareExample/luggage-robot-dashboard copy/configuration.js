// configuration.js

document.addEventListener('DOMContentLoaded', function() {
    const airlineSelect = document.getElementById('airline');
    const planeGroup = document.getElementById('plane-group');
    const planeSelect = document.getElementById('plane');
    const luggageGroup = document.getElementById('luggage-group');

    const planeOptions = {
        southwest: [
            'Boeing 737-700',
            'Boeing 737-800',
            'Boeing 737 MAX 7',
            'Boeing 737 MAX 8'
        ],
        american: [
            'Airbus A319',
            'Airbus A320',
            'Boeing 737-800',
            'Boeing 787-8',
            'Boeing 777-200'
        ],
        delta: [
            'Airbus A220-100',
            'Airbus A321',
            'Boeing 737-900ER',
            'Boeing 767-300ER',
            'Boeing 757-200'
        ]
    };

    airlineSelect.addEventListener('change', function() {
        const selectedAirline = this.value;
        if (selectedAirline && planeOptions[selectedAirline]) {
            // Clear previous plane options
            planeSelect.innerHTML = '';
            // Populate plane options
            planeOptions[selectedAirline].forEach(function(plane) {
                const option = document.createElement('option');
                option.value = plane;
                option.textContent = plane;
                planeSelect.appendChild(option);
            });
            planeGroup.style.display = 'block';
            luggageGroup.style.display = 'block'; // Show luggage options when airline is selected
        } else {
            planeGroup.style.display = 'none';
            luggageGroup.style.display = 'none';
            planeSelect.innerHTML = '';
            document.getElementById('luggage').innerHTML = '<option value="">--Select Operation--</option>';
        }
    });
});
