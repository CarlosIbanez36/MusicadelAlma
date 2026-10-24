// ============================================
// WORLD MUSIC EXPLORER - MAIN SCRIPT
// ============================================

// Music Data - Each entry has a Spotify link
const musicData = [
    // AMERICAS
    {
        title: "Mariachi",
        region: "americas",
        regionName: "Mexico 🇲🇽",
        emoji: "🎺",
        description: "Traditional Mexican folk music with trumpets, violins and guitars that celebrates love, life and revolution.",
        spotify: "https://open.spotify.com/search/mariachi",
        color: "linear-gradient(90deg, #006847, #ce1126)"
    },
    {
        title: "Tango",
        region: "americas",
        regionName: "Argentina 🇦🇷",
        emoji: "💃",
        description: "Passionate Argentine dance music born in the streets of Buenos Aires. Bandoneón-driven and full of drama.",
        spotify: "https://open.spotify.com/search/tango",
        color: "linear-gradient(90deg, #74acdf, #ffffff)"
    },
    {
        title: "Samba",
        region: "americas",
        regionName: "Brazil 🇧🇷",
        emoji: "🥁",
        description: "The heartbeat of Brazil! Rhythmic, joyful and infectious music that powers Carnival every year.",
        spotify: "https://open.spotify.com/search/samba",
        color: "linear-gradient(90deg, #009c3b, #ffdf00)"
    },
    {
        title: "Jazz",
        region: "americas",
        regionName: "USA 🇺🇸",
        emoji: "🎷",
        description: "America's original art form — improvisation, swing and soul born in New Orleans over a century ago.",
        spotify: "https://open.spotify.com/search/jazz",
        color: "linear-gradient(90deg, #3c3b6e, #b22234)"
    },
    {
        title: "Reggae",
        region: "americas",
        regionName: "Jamaica 🇯🇲",
        emoji: "🌴",
        description: "Laid-back Caribbean grooves with offbeat rhythms spreading messages of peace, love and unity.",
        spotify: "https://open.spotify.com/search/reggae",
        color: "linear-gradient(90deg, #009b3a, #fed100)"
    },
    {
        title: "Cumbia",
        region: "americas",
        regionName: "Colombia 🇨🇴",
        emoji: "🪘",
        description: "Colombia's gift to the world — a danceable blend of African, Indigenous and European rhythms.",
        spotify: "https://open.spotify.com/search/cumbia",
        color: "linear-gradient(90deg, #fcd116, #003893)"
    },

    // EUROPE
    {
        title: "Flamenco",
        region: "europe",
        regionName: "Spain 🇪🇸",
        emoji: "💃",
        description: "Fiery Andalusian art form combining guitar, dance and song — pure emotion and duende!",
        spotify: "https://open.spotify.com/search/flamenco",
        color: "linear-gradient(90deg, #aa151b, #f1bf00)"
    },
    {
        title: "Irish Folk",
        region: "europe",
        regionName: "Ireland 🇮🇪",
        emoji: "🍀",
        description: "Fiddles, tin whistles and bodhráns telling ancient Celtic stories in lively jigs and reels.",
        spotify: "https://open.spotify.com/search/irish%20folk",
        color: "linear-gradient(90deg, #169b62, #ff883e)"
    },
    {
        title: "Fado",
        region: "europe",
        regionName: "Portugal 🇵🇹",
        emoji: "🎸",
        description: "Melancholic Portuguese soul music — songs of longing, loss and the sea. Pure 'saudade'.",
        spotify: "https://open.spotify.com/search/fado",
        color: "linear-gradient(90deg, #046a38, #da020e)"
    },
    {
        title: "EDM",
        region: "europe",
        regionName: "Europe 🌍",
        emoji: "🎛️",
        description: "Electronic Dance Music — the pulse of festivals from Ibiza to Berlin. Drop the bass!",
        spotify: "https://open.spotify.com/search/edm",
        color: "linear-gradient(90deg, #8338ec, #3a86ff)"
    },
    {
        title: "Greek Rebetiko",
        region: "europe",
        regionName: "Greece 🇬🇷",
        emoji: "🪕",
        description: "Urban Greek blues from the 1920s — the music of the marginalized with bouzouki and passion.",
        spotify: "https://open.spotify.com/search/rebetiko",
        color: "linear-gradient(90deg, #0d5eaf, #ffffff)"
    },

    // AFRICA
    {
        title: "Afrobeat",
        region: "africa",
        regionName: "Nigeria 🇳🇬",
        emoji: "🥁",
        description: "Fela Kuti's revolutionary fusion of West African rhythms with jazz and funk. Pure groove!",
        spotify: "https://open.spotify.com/search/afrobeat",
        color: "linear-gradient(90deg, #008751, #ffffff)"
    },
    {
        title: "Amapiano",
        region: "africa",
        regionName: "South Africa 🇿🇦",
        emoji: "🎹",
        description: "South Africa's hottest export — deep house with log drums and jazzy piano. The sound of now!",
        spotify: "https://open.spotify.com/search/amapiano",
        color: "linear-gradient(90deg, #007a4d, #ffb612)"
    },
    {
        title: "Gnawa",
        region: "africa",
        regionName: "Morocco 🇲🇦",
        emoji: "🪘",
        description: "Spiritual trance music from Morocco with hypnotic guembri bass and iron castanets.",
        spotify: "https://open.spotify.com/search/gnawa",
        color: "linear-gradient(90deg, #c1272d, #006233)"
    },
    {
        title: "Highlife",
        region: "africa",
        regionName: "Ghana 🇬🇭",
        emoji: "🎺",
        description: "Ghanaian fusion of jazz, swing and traditional rhythms — the sound of independence and joy.",
        spotify: "https://open.spotify.com/search/highlife",
        color: "linear-gradient(90deg, #006b3f, #fcd116)"
    },
    {
        title: "Ethio-Jazz",
        region: "africa",
        regionName: "Ethiopia 🇪🇹",
        emoji: "🎷",
        description: "Ethiopian scales meet jazz harmonies — a hypnotic, ancient-modern sound like no other.",
        spotify: "https://open.spotify.com/search/ethio-jazz",
        color: "linear-gradient(90deg, #078930, #fcdd09)"
    },

    // ASIA
    {
        title: "K-Pop",
        region: "asia",
        regionName: "South Korea 🇰🇷",
        emoji: "⭐",
        description: "Korean pop sensation taking over the world with slick production, choreography and fandom power!",
        spotify: "https://open.spotify.com/search/k-pop",
        color: "linear-gradient(90deg, #cd2e3a, #0047a0)"
    },
    {
        title: "J-Pop / City Pop",
        region: "asia",
        regionName: "Japan 🇯🇵",
        emoji: "🌸",
        description: "From kawaii J-pop to retro City Pop — Japan's vibrant pop culture sounds reinvented.",
        spotify: "https://open.spotify.com/search/city%20pop",
        color: "linear-gradient(90deg, #bc002d, #ffffff)"
    },
    {
        title: "Bollywood",
        region: "asia",
        regionName: "India 🇮🇳",
        emoji: "🎬",
        description: "Epic Hindi film music with orchestral strings, tabla and unforgettable vocal hooks.",
        spotify: "https://open.spotify.com/search/bollywood",
        color: "linear-gradient(90deg, #ff9933, #138808)"
    },
    {
        title: "Gamelan",
        region: "asia",
        regionName: "Indonesia 🇮🇩",
        emoji: "🔔",
        description: "Indonesian percussion orchestra with bronze gongs and metallophones creating shimmering textures.",
        spotify: "https://open.spotify.com/search/gamelan",
        color: "linear-gradient(90deg, #ce1126, #ffffff)"
    },
    {
        title: "Thai Luk Thung",
        region: "asia",
        regionName: "Thailand 🇹🇭",
        emoji: "🎤",
        description: "Thailand's 'song of the fields' — country-style pop with emotional vocals and folk roots.",
        spotify: "https://open.spotify.com/search/luk%20thung",
        color: "linear-gradient(90deg, #a51931, #2d2a4a)"
    },
    {
        title: "Arabic Pop",
        region: "asia",
        regionName: "Middle East 🕌",
        emoji: "🪘",
        description: "Modern Arabic pop with maqam scales, electronic beats and passionate vocals.",
        spotify: "https://open.spotify.com/search/arabic%20pop",
        color: "linear-gradient(90deg, #006c35, #ffffff)"
    },

    // OCEANIA
    {
        title: "Didgeridoo",
        region: "oceania",
        regionName: "Australia 🇦🇺",
        emoji: "🎵",
        description: "The world's oldest wind instrument — a deep, meditative drone from Aboriginal tradition.",
        spotify: "https://open.spotify.com/search/didgeridoo",
        color: "linear-gradient(90deg, #00008b, #ffcc00)"
    },
    {
        title: "Maori Waiata",
        region: "oceania",
        regionName: "New Zealand 🇳🇿",
        emoji: "🌺",
        description: "Traditional Māori songs with harmonies, haka rhythms and stories of ancestors and land.",
        spotify: "https://open.spotify.com/search/maori%20music",
        color: "linear-gradient(90deg, #00247d, #cc142b)"
    },
    {
        title: "Pacific Island Reggae",
        region: "oceania",
        regionName: "Polynesia 🌴",
        emoji: "🏝️",
        description: "Island reggae with ukulele, harmonies and laid-back vibes from Samoa, Fiji and beyond.",
        spotify: "https://open.spotify.com/search/pacific%20reggae",
        color: "linear-gradient(90deg, #00b4d8, #90e0ef)"
    }
];

// Fun Facts Array
const funFacts = [
    "🎵 Music is the only activity that activates EVERY part of the brain at once!",
    "🥁 The didgeridoo is estimated to be over 40,000 years old — the oldest instrument in the world!",
    "🎤 K-Pop groups like BTS have broken records traditionally held by Western artists in the US!",
    "💃 Tango was originally danced by men-only in Buenos Aires — as a way to practice for the streets!",
    "🎸 Flamenco's 'duende' is an untranslatable Spanish word describing the soulful emotional state of the performer.",
    "🌍 Africa has over 2,000 different languages, each with its own musical traditions!",
    "🎧 The word 'jazz' likely comes from the slang term 'jasm' meaning 'energy' or 'spirit'.",
    "🎼 Amapiano's name comes from the Zulu word 'amapiano' meaning 'pianos' — referring to the jazzy piano melodies.",
    "🎺 Mariachi bands traditionally had 4-5 musicians; today they can have up to 20!",
    "🪘 In Gamelan music, instruments are tuned in pairs to create a shimmering 'wave' effect called 'ombak'.",
    "🎤 Bollywood produces more songs per year than any other film industry in the world!",
    "🎵 Samba was born in the favelas of Rio — music of resistance, joy and community.",
    "🌟 City Pop, a 1980s Japanese genre, has had a HUGE revival in the 2020s thanks to streaming!",
    "🎸 The bandoneón used in tango was originally designed for churches in Germany!"
];

// ============================================
// DOM ELEMENTS
// ============================================
const cardsGrid = document.getElementById('cardsGrid');
const filterButtons = document.getElementById('filterButtons');
const funFactEl = document.getElementById('funFact');
const newFactBtn = document.getElementById('newFactBtn');
const musicNotesContainer = document.getElementById('musicNotes');

// ============================================
// RENDER CARDS
// ============================================
function renderCards(filter = 'all') {
    cardsGrid.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? musicData 
        : musicData.filter(item => item.region === filter);
    
    filtered.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.style.setProperty('--card-color', item.color);
        
        card.innerHTML = `
            <div class="card-header">
                <span class="card-emoji">${item.emoji}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-region">${item.regionName}</p>
            </div>
            <div class="card-body">
                <p class="card-description">${item.description}</p>
                <a href="${item.spotify}" target="_blank" rel="noopener noreferrer" class="spotify-link">
                    <svg class="spotify-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Listen on Spotify
                </a>
            </div>
        `;
        
        cardsGrid.appendChild(card);
    });
}

// ============================================
// FILTER FUNCTIONALITY
// ============================================
filterButtons.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    
    // Update active state
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Render filtered cards
    renderCards(btn.dataset.filter);
});

// ============================================
// FUN FACTS
// ============================================
function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactEl.style.opacity = '0';
    setTimeout(() => {
        funFactEl.textContent = funFacts[randomIndex];
        funFactEl.style.opacity = '1';
    }, 200);
}

funFactEl.style.transition = 'opacity 0.3s ease';

newFactBtn.addEventListener('click', showRandomFact);

// ============================================
// FLOATING MUSIC NOTES BACKGROUND
// ============================================
const noteSymbols = ['🎵', '🎶', '🎼', '🎤', '🎧', '🎸', '🥁', '🎺', '🎷', '🎹', '🎻', '🪕'];

function createMusicNote() {
    const note = document.createElement('div');
    note.className = 'music-note';
    note.textContent = noteSymbols[Math.floor(Math.random() * noteSymbols.length)];
    note.style.left = Math.random() * 100 + '%';
    note.style.animationDuration = (10 + Math.random() * 10) + 's';
    note.style.fontSize = (1 + Math.random() * 2) + 'rem';
    musicNotesContainer.appendChild(note);
    
    setTimeout(() => note.remove(), 20000);
}

// Create notes periodically
setInterval(createMusicNote, 800);

// Initial notes
for (let i = 0; i < 10; i++) {
    setTimeout(createMusicNote, i * 200);
}

// ============================================
// SMOOTH SCROLL FOR CTA
// ============================================
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('regions').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
});

// ============================================
// INITIALIZE
// =