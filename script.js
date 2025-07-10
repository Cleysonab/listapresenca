// Import Firebase

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA_t3lqMQN5SZ0uou7lfLbanA7AxzjDE_E",
  authDomain: "sitefotos-ca092.firebaseapp.com",
  databaseURL: "https://sitefotos-ca092-default-rtdb.firebaseio.com",
  projectId: "sitefotos-ca092",
  storageBucket: "sitefotos-ca092.firebasestorage.app",
  messagingSenderId: "512098639699",
  appId: "1:512098639699:web:1bb35a09a8a8570540cba6",
}

// Inicializar Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

// Dados iniciais dos convidados (serão carregados do Firebase)
let guestsData = {
  SAND001: {
    name: "Sandra Santana",
    guests: [
      { id: 1, name: "Sandra Santana", relation: "Convidado principal", confirmed: false },
      { id: 2, name: "Luis Alberto", relation: "Convidado", confirmed: false },
      { id: 3, name: "Thawane", relation: "Convidado", confirmed: false },
      { id: 4, name: "Matheus", relation: "Convidado", confirmed: false },
    ],
  },
  MARC001: {
    name: "Marcos",
    guests: [
      { id: 5, name: "Marcos", relation: "Convidado principal", confirmed: false },
      { id: 6, name: "Camila", relation: "Convidado", confirmed: false },
      { id: 7, name: "Samuel", relation: "Convidado", confirmed: false },
    ],
  },
  IVET001: {
    name: "Ivete",
    guests: [{ id: 8, name: "Ivete", relation: "Convidado principal", confirmed: false }],
  },
  GLAY001: {
    name: "Glayce",
    guests: [
      { id: 9, name: "Glayce", relation: "Convidado principal", confirmed: false },
      { id: 10, name: "Lucas", relation: "Convidado", confirmed: false },
      { id: 11, name: "Sophia Cristina de Almeida", relation: "Convidado", confirmed: false },
    ],
  },
  LETI001: {
    name: "Leticia",
    guests: [
      { id: 12, name: "Leticia", relation: "Convidado principal", confirmed: false },
      { id: 13, name: "Wagner Toledo", relation: "Convidado", confirmed: false },
      { id: 14, name: "Pedro", relation: "Criança", confirmed: false },
      { id: 15, name: "Caleb", relation: "Criança", confirmed: false },
    ],
  },
  LEAN001: {
    name: "Leandro",
    guests: [
      { id: 16, name: "Leandro", relation: "Convidado principal", confirmed: false },
      { id: 17, name: "Sandra", relation: "Convidado", confirmed: false },
      { id: 18, name: "Luan", relation: "Convidado", confirmed: false },
      { id: 19, name: "Ruan", relation: "Convidado", confirmed: false },
    ],
  },
  ANDR001: {
    name: "Andreza",
    guests: [
      { id: 20, name: "Andreza", relation: "Convidado principal", confirmed: false },
      { id: 21, name: "Wiliam", relation: "Convidado", confirmed: false },
      { id: 22, name: "Ana Beatriz Camargo", relation: "Convidado", confirmed: false },
      { id: 23, name: "Heloisa Camargo", relation: "Convidado", confirmed: false },
    ],
  },
  PRIS001: {
    name: "Priscila",
    guests: [
      { id: 24, name: "Priscila", relation: "Convidado principal", confirmed: false },
      { id: 25, name: "Emerson", relation: "Convidado", confirmed: false },
      { id: 26, name: "Hiago", relation: "Convidado", confirmed: false },
    ],
  },
  CARL001: {
    name: "Carla",
    guests: [
      { id: 27, name: "Carla", relation: "Convidado principal", confirmed: false },
      { id: 28, name: "Helena", relation: "Convidado", confirmed: false },
    ],
  },
  REJA001: {
    name: "Rejane",
    guests: [
      { id: 29, name: "Rejane", relation: "Convidado principal", confirmed: false },
      { id: 30, name: "Deoclecio", relation: "Convidado", confirmed: false },
      { id: 31, name: "Lara", relation: "Convidado", confirmed: false },
    ],
  },
  ANAM001: {
    name: "Ana Maria",
    guests: [
      { id: 32, name: "Ana Maria", relation: "Convidado principal", confirmed: false },
      { id: 33, name: "Teo", relation: "Convidado", confirmed: false },
    ],
  },
  DIEG001: {
    name: "Diego",
    guests: [
      { id: 34, name: "Diego", relation: "Convidado principal", confirmed: false },
      { id: 35, name: "Flávia", relation: "Convidado", confirmed: false },
      { id: 36, name: "Daniel", relation: "Convidado", confirmed: false },
      { id: 37, name: "Ana Beatriz Dos Santos", relation: "Convidado", confirmed: false },
    ],
  },
  ANJU001: {
    name: "Ana Julia",
    guests: [
      { id: 38, name: "Ana Julia", relation: "Convidado principal", confirmed: false },
      { id: 39, name: "Conceição", relation: "Convidado", confirmed: false },
    ],
  },
  URIE001: {
    name: "Uriel",
    guests: [
      { id: 40, name: "Uriel", relation: "Convidado principal", confirmed: false },
      { id: 41, name: "Larissa", relation: "Convidado", confirmed: false },
    ],
  },
  GEDA001: {
    name: "Gedalva",
    guests: [
      { id: 42, name: "Gedalva", relation: "Convidado principal", confirmed: false },
      { id: 43, name: "Aguinaldo", relation: "Convidado", confirmed: false },
      { id: 44, name: "Lucas Golveia", relation: "Convidado", confirmed: false },
    ],
  },
  SOPH001: {
    name: "Sophia Goes",
    guests: [{ id: 45, name: "Sophia Goes", relation: "Convidado principal", confirmed: false }],
  },
  GEOV001: {
    name: "Geovanna Almeida",
    guests: [{ id: 46, name: "Geovanna Almeida", relation: "Convidado principal", confirmed: false }],
  },
  CATI001: {
    name: "Catia Fonseca",
    guests: [
      { id: 47, name: "Catia Fonseca", relation: "Convidado principal", confirmed: false },
      { id: 48, name: "Nicole Fonseca", relation: "Convidado", confirmed: false },
      { id: 49, name: "Melissa Fonseca", relation: "Convidado", confirmed: false },
      { id: 50, name: "Vatinho", relation: "Convidado", confirmed: false },
    ],
  },
  ISAB001: {
    name: "Isabelly Rivas",
    guests: [{ id: 51, name: "Isabelly Rivas", relation: "Convidado principal", confirmed: false }],
  },
  ESTE001: {
    name: "Ester Gonçalves",
    guests: [{ id: 52, name: "Ester Gonçalves", relation: "Convidado principal", confirmed: false }],
  },
  LAUR001: {
    name: "Laura Silva",
    guests: [{ id: 53, name: "Laura Silva", relation: "Convidado principal", confirmed: false }],
  },
  SOFI001: {
    name: "Sofia Alves",
    guests: [{ id: 54, name: "Sofia Alves", relation: "Convidado principal", confirmed: false }],
  },
  PEDR001: {
    name: "Pedro Henrique Rocha",
    guests: [{ id: 55, name: "Pedro Henrique Rocha", relation: "Convidado principal", confirmed: false }],
  },
  MARI001: {
    name: "Mariana de Melo",
    guests: [{ id: 56, name: "Mariana de Melo", relation: "Convidado principal", confirmed: false }],
  },
  CLAR001: {
    name: "Clara Campiteli",
    guests: [{ id: 57, name: "Clara Campiteli", relation: "Convidado principal", confirmed: false }],
  },
  BREN001: {
    name: "Brenda Goncalves",
    guests: [{ id: 58, name: "Brenda Goncalves", relation: "Convidado principal", confirmed: false }],
  },
  KARO001: {
    name: "Karollaine Dantas",
    guests: [{ id: 59, name: "Karollaine Dantas", relation: "Convidado principal", confirmed: false }],
  },
  ANAC001: {
    name: "Ana Carolina de Paula Rodrigues",
    guests: [{ id: 60, name: "Ana Carolina de Paula Rodrigues", relation: "Convidado principal", confirmed: false }],
  },
  SOPH002: {
    name: "Sophia Machado",
    guests: [{ id: 61, name: "Sophia Machado", relation: "Convidado principal", confirmed: false }],
  },
  BIAN001: {
    name: "Bianca Zanardi",
    guests: [{ id: 62, name: "Bianca Zanardi", relation: "Convidado principal", confirmed: false }],
  },
  ROSE001: {
    name: "Roselange",
    guests: [
      { id: 63, name: "Roselange", relation: "Convidado principal", confirmed: false },
      { id: 64, name: "Kaique", relation: "Convidado", confirmed: false },
    ],
  },
  ISAB002: {
    name: "Isabelly Yukari",
    guests: [{ id: 65, name: "Isabelly Yukari", relation: "Convidado principal", confirmed: false }],
  },
  ANAP001: {
    name: "Ana Paula Snetana",
    guests: [{ id: 66, name: "Ana Paula Snetana", relation: "Convidado principal", confirmed: false }],
  },
  SARA001: {
    name: "Sarah Araujo",
    guests: [{ id: 67, name: "Sarah Araujo", relation: "Convidado principal", confirmed: false }],
  },
  LAIS001: {
    name: "Laís Casteluci",
    guests: [{ id: 68, name: "Laís Casteluci", relation: "Convidado principal", confirmed: false }],
  },
  ESTE002: {
    name: "Ester Miranda",
    guests: [{ id: 69, name: "Ester Miranda", relation: "Convidado principal", confirmed: false }],
  },
  ABEL001: {
    name: "Abelle de Deus",
    guests: [{ id: 70, name: "Abelle de Deus", relation: "Convidado principal", confirmed: false }],
  },
  ARTH001: {
    name: "Arthur Maringo",
    guests: [{ id: 71, name: "Arthur Maringo", relation: "Convidado principal", confirmed: false }],
  },
  NOAH001: {
    name: "Noah Droguette",
    guests: [{ id: 72, name: "Noah Droguette", relation: "Convidado principal", confirmed: false }],
  },
  VICT001: {
    name: "Victoria Querino",
    guests: [
      { id: 73, name: "Victoria Querino", relation: "Convidado principal", confirmed: false },
      { id: 74, name: "Camila Querino", relation: "Convidado", confirmed: false },
    ],
  },
  PEDR002: {
    name: "Pedro Fenley",
    guests: [{ id: 75, name: "Pedro Fenley", relation: "Convidado principal", confirmed: false }],
  },
  GABR001: {
    name: "Gabriel Cardoso",
    guests: [{ id: 76, name: "Gabriel Cardoso", relation: "Convidado principal", confirmed: false }],
  },
  GABR002: {
    name: "Gabriela Felipe",
    guests: [{ id: 77, name: "Gabriela Felipe", relation: "Convidado principal", confirmed: false }],
  },
  NATH001: {
    name: "Nathan Franchini",
    guests: [{ id: 78, name: "Nathan Franchini", relation: "Convidado principal", confirmed: false }],
  },
  RAQU001: {
    name: "Raquel Rosseto Machado",
    guests: [
      { id: 79, name: "Raquel Rosseto Machado", relation: "Convidado principal", confirmed: false },
      { id: 80, name: "Felipe Cardoso de Oliveira", relation: "Convidado", confirmed: false },
      { id: 81, name: "Gabriel Machado de Oliveira", relation: "Convidado", confirmed: false },
    ],
  },
  FABI001: {
    name: "Fabiana Ortega",
    guests: [
      { id: 82, name: "Fabiana Ortega", relation: "Convidado principal", confirmed: false },
      { id: 83, name: "Lorena Ortega", relation: "Convidado", confirmed: false },
    ],
  },
  JENI001: {
    name: "Jenifer",
    guests: [
      { id: 84, name: "Jenifer", relation: "Convidado principal", confirmed: false },
      { id: 85, name: "Alice", relation: "Convidado", confirmed: false },
    ],
  },
  CRIS001: {
    name: "Cristina Bernando",
    guests: [
      { id: 86, name: "Cristina Bernando", relation: "Convidado principal", confirmed: false },
      { id: 87, name: "Cristiano Bernando", relation: "Convidado", confirmed: false },
      { id: 88, name: "Davi", relation: "Convidado", confirmed: false },
      { id: 89, name: "Rafa", relation: "Convidado", confirmed: false },
    ],
  },
  JUNI001: {
    name: "Juninho",
    guests: [
      { id: 90, name: "Juninho", relation: "Convidado principal", confirmed: false },
      { id: 91, name: "Adriana", relation: "Convidado", confirmed: false },
    ],
  },
  PATR001: {
    name: "Patricia",
    guests: [
      { id: 92, name: "Patricia", relation: "Convidado principal", confirmed: false },
      { id: 93, name: "Adilson", relation: "Convidado", confirmed: false },
      { id: 94, name: "Julia do Amaral", relation: "Convidado", confirmed: false },
      { id: 95, name: "Estela", relation: "Convidado", confirmed: false },
    ],
  },
  LURD001: {
    name: "Lurdinha",
    guests: [
      { id: 96, name: "Lurdinha", relation: "Convidado principal", confirmed: false },
      { id: 97, name: "Francisco", relation: "Convidado", confirmed: false },
    ],
  },
  DEBO001: {
    name: "Debora",
    guests: [
      { id: 98, name: "Debora", relation: "Convidado principal", confirmed: false },
      { id: 99, name: "Kiko", relation: "Convidado", confirmed: false },
      { id: 100, name: "Lucas", relation: "Convidado", confirmed: false },
      { id: 101, name: "Livia", relation: "Convidado", confirmed: false },
    ],
  },
  LIDI001: {
    name: "Lidia",
    guests: [
      { id: 102, name: "Lidia", relation: "Convidado principal", confirmed: false },
      { id: 103, name: "Danilo", relation: "Convidado", confirmed: false },
    ],
  },
  VIVI001: {
    name: "Viviane",
    guests: [{ id: 104, name: "Viviane", relation: "Convidado principal", confirmed: false }],
  },
  AMAN001: {
    name: "Amanda",
    guests: [
      { id: 105, name: "Amanda", relation: "Convidado principal", confirmed: false },
      { id: 106, name: "Wagner Eloy", relation: "Convidado", confirmed: false },
      { id: 107, name: "Giovana Cletti", relation: "Convidado", confirmed: false },
      { id: 108, name: "Perola", relation: "Convidado", confirmed: false },
    ],
  },
  DANI001: {
    name: "Daniela",
    guests: [{ id: 109, name: "Daniela", relation: "Convidado principal", confirmed: false }],
  },
  JULI001: {
    name: "Juliana e Fernando",
    guests: [
      { id: 110, name: "Juliana", relation: "Convidado principal", confirmed: false },
      { id: 111, name: "Fernando", relation: "Convidado", confirmed: false },
      { id: 112, name: "Miguel", relation: "Convidado", confirmed: false },
    ],
  },
  MARC002: {
    name: "Marcela Santana",
    guests: [
      { id: 113, name: "Marcela Santana", relation: "Convidado principal", confirmed: false },
      { id: 114, name: "Sofia da Silva Santana", relation: "Convidado", confirmed: false },
      { id: 115, name: "Manuela Santana", relation: "Convidado", confirmed: false },
      { id: 116, name: "Rodrigo", relation: "Convidado", confirmed: false },
    ],
  },
  CESA001: {
    name: "Cesar",
    guests: [{ id: 117, name: "Cesar", relation: "Convidado principal", confirmed: false }],
  },
  HELO001: {
    name: "Heloisa Olimpio",
    guests: [{ id: 118, name: "Heloisa Olimpio", relation: "Convidado principal", confirmed: false }],
  },
  ISAB003: {
    name: "Isabela Doni",
    guests: [{ id: 119, name: "Isabela Doni", relation: "Convidado principal", confirmed: false }],
  },
  MANU001: {
    name: "Manuela Kaguimoto",
    guests: [{ id: 120, name: "Manuela Kaguimoto", relation: "Convidado principal", confirmed: false }],
  },
  ANAL001: {
    name: "Ana Luisa",
    guests: [{ id: 121, name: "Ana Luisa", relation: "Convidado principal", confirmed: false }],
  },
  MARI002: {
    name: "Maria das Virgens",
    guests: [{ id: 122, name: "Maria das Virgens", relation: "Convidado principal", confirmed: false }],
  },
  IZOL001: {
    name: "Izolda",
    guests: [
      { id: 123, name: "Izolda", relation: "Convidado principal", confirmed: false },
      { id: 124, name: "Vicente", relation: "Convidado", confirmed: false },
    ],
  },
  KATI001: {
    name: "Katia Kilogon",
    guests: [
      { id: 125, name: "Katia Kilogon", relation: "Convidado principal", confirmed: false },
      { id: 126, name: "Eduarda", relation: "Convidado", confirmed: false },
    ],
  },
  MARA001: {
    name: "Maraisa Lopes",
    guests: [
      { id: 127, name: "Maraisa Lopes", relation: "Convidado principal", confirmed: false },
      { id: 128, name: "Ashey Lopes", relation: "Convidado", confirmed: false },
      { id: 129, name: "Alicia Lopes", relation: "Convidado", confirmed: false },
    ],
  },
  NATA001: {
    name: "Natasha",
    guests: [{ id: 130, name: "Natasha", relation: "Convidado principal", confirmed: false }],
  },
  LUIS001: {
    name: "Luis Carlos Matias",
    guests: [{ id: 131, name: "Luis Carlos Matias", relation: "Convidado principal", confirmed: false }],
  },
  PEND001: {
    name: "Convidado Pendente - Definir Nomes",
    guests: [],
    isPending: true,
    maxGuests: 10,
  },
}

// Senha do administrador
const ADMIN_PASSWORD = "admin123"

// Estado atual
let currentUser = null
let currentUserType = null

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  showLoadingOverlay(true)
  initializeFirebaseData()
  setupEventListeners()
})

function setupEventListeners() {
  document.getElementById("loginForm").addEventListener("submit", handleGuestLogin)
  document.getElementById("adminForm").addEventListener("submit", handleAdminLogin)
}

// Inicializar dados no Firebase (apenas na primeira vez)
function initializeFirebaseData() {
  database
    .ref("guestConfirmations")
    .once("value")
    .then((snapshot) => {
      if (!snapshot.exists()) {
        // Se não existem dados no Firebase, inicializar com dados padrão
        return database
          .ref("guestConfirmations")
          .set(guestsData)
          .then(() => {
            console.log("Dados iniciais salvos no Firebase")
          })
      } else {
        // Carregar dados existentes do Firebase
        guestsData = snapshot.val()
        console.log("Dados carregados do Firebase")
      }
    })
    .catch((error) => {
      console.error("Erro ao inicializar Firebase:", error)
      alert("Erro ao conectar com o servidor. Tente novamente.")
    })
    .finally(() => {
      showLoadingOverlay(false)
    })
}

// Mostrar/ocultar overlay de carregamento
function showLoadingOverlay(show) {
  document.getElementById("loadingOverlay").style.display = show ? "block" : "none"
}

// Mostrar/ocultar mensagem de carregamento
function showLoadingMessage(show) {
  document.getElementById("loadingMessage").style.display = show ? "block" : "none"
  document.getElementById("saveBtn").disabled = show
}

function handleGuestLogin(e) {
  e.preventDefault()
  const code = document.getElementById("guestCode").value.toUpperCase()

  if (guestsData[code]) {
    currentUser = code
    currentUserType = "guest"
    loadGuestData().then(() => {
      showGuestSection()
    })
  } else {
    alert("Código inválido! Verifique seu convite.")
  }
}

function handleAdminLogin(e) {
  e.preventDefault()
  const password = document.getElementById("adminPassword").value

  if (password === ADMIN_PASSWORD) {
    currentUserType = "admin"
    showLoadingOverlay(true)
    loadAllData().then(() => {
      showLoadingOverlay(false)
      showAdminSection()
    })
  } else {
    alert("Senha incorreta!")
  }
}

// Carregar dados específicos do convidado
function loadGuestData() {
  showLoadingOverlay(true)
  return database
    .ref("guestConfirmations/" + currentUser)
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        guestsData[currentUser] = snapshot.val()
      }
    })
    .catch((error) => {
      console.error("Erro ao carregar dados do convidado:", error)
      alert("Erro ao carregar dados. Tente novamente.")
    })
    .finally(() => {
      showLoadingOverlay(false)
    })
}

// Carregar todos os dados (para admin)
function loadAllData() {
  return database
    .ref("guestConfirmations")
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        guestsData = snapshot.val()
      }
    })
    .catch((error) => {
      console.error("Erro ao carregar todos os dados:", error)
      alert("Erro ao carregar dados. Tente novamente.")
    })
}

// Atualizar dados (botão refresh do admin)
function refreshData() {
  showLoadingOverlay(true)
  loadAllData().then(() => {
    updateAdminStats()
    renderConfirmationsList()
    showLoadingOverlay(false)
  })
}

function showGuestSection() {
  hideAllSections()
  document.getElementById("guestSection").style.display = "block"

  const guestData = guestsData[currentUser]
  document.getElementById("guestName").textContent = guestData.name

  renderGuestList()
}

function showAdminSection() {
  hideAllSections()
  document.getElementById("adminSection").style.display = "block"

  updateAdminStats()
  renderConfirmationsList()
}

function showAdminLogin() {
  document.getElementById("loginSection").style.display = "none"
  document.getElementById("adminLogin").style.display = "block"
}

function showGuestLogin() {
  document.getElementById("adminLogin").style.display = "none"
  document.getElementById("loginSection").style.display = "block"
}

function hideAllSections() {
  document.getElementById("loginSection").style.display = "none"
  document.getElementById("adminLogin").style.display = "none"
  document.getElementById("guestSection").style.display = "none"
  document.getElementById("adminSection").style.display = "none"
}

function renderGuestList() {
  const guestList = document.getElementById("guestList")
  const guestData = guestsData[currentUser]

  guestList.innerHTML = ""

  // Se é um convidado pendente, mostrar instruções especiais
  if (guestData.isPending) {
    const instructionsDiv = document.createElement("div")
    instructionsDiv.className = "pending-instructions"
    instructionsDiv.innerHTML = `
      <div class="alert-info">
        <h4>📝 Instruções Especiais</h4>
        <p>Por favor, adicione os nomes dos seus convidados clicando no botão "Adicionar Convidado" abaixo.</p>
        <p>Limite máximo: ${guestData.maxGuests} convidados</p>
      </div>
    `
    guestList.appendChild(instructionsDiv)
  }

  guestData.guests.forEach((guest) => {
    const guestItem = document.createElement("div")
    guestItem.className = "guest-item"

    guestItem.innerHTML = `
      <div class="guest-info">
        <h4>${guest.name}</h4>
        <p>${guest.relation}</p>
      </div>
      <div class="guest-actions">
        <div class="confirmation-toggle">
          <span>Confirmar presença:</span>
          <div class="toggle-switch ${guest.confirmed ? "active" : ""}" 
               onclick="toggleConfirmation(${guest.id})">
          </div>
        </div>
        ${guestData.isPending ? `<button onclick="removeGuest(${guest.id})" class="remove-btn">Remover</button>` : ""}
      </div>
    `

    guestList.appendChild(guestItem)
  })

  // Botão para adicionar novos convidados (apenas para convidados pendentes)
  if (guestData.isPending) {
    const addButtonDiv = document.createElement("div")
    addButtonDiv.className = "add-guest-section"
    addButtonDiv.innerHTML = `
      <button onclick="addNewGuest()" class="add-guest-btn">
        ➕ Adicionar Convidado (${guestData.guests.length}/${guestData.maxGuests})
      </button>
    `
    guestList.appendChild(addButtonDiv)
  }
}

function toggleConfirmation(guestId) {
  const guestData = guestsData[currentUser]
  const guest = guestData.guests.find((g) => g.id === guestId)

  if (guest) {
    guest.confirmed = !guest.confirmed
    renderGuestList()
  }
}

function addNewGuest() {
  const guestData = guestsData[currentUser]
  if (!guestData.isPending) return

  if (guestData.guests.length >= guestData.maxGuests) {
    alert("Limite máximo de " + guestData.maxGuests + " convidados atingido.")
    return
  }

  const name = prompt("Digite o nome do convidado:")
  if (!name || name.trim() === "") return

  const relation = prompt("Digite a relação (ex: Esposo, Filho, Amigo, etc.):")
  if (!relation || relation.trim() === "") return

  // Gerar novo ID único
  const allIds = []
  Object.values(guestsData).forEach((family) => {
    if (Array.isArray(family.guests)) {
      family.guests.forEach((guest) => {
        allIds.push(guest.id)
      })
    }
  })
  const newId = Math.max.apply(Math, allIds.concat([0])) + 1

  guestData.guests.push({
    id: newId,
    name: name.trim(),
    relation: relation.trim(),
    confirmed: false,
  })

  renderGuestList()

  // Salvar automaticamente no Firebase
  saveToFirebase()
}

function removeGuest(guestId) {
  const guestData = guestsData[currentUser]
  if (!guestData.isPending) return

  if (confirm("Tem certeza que deseja remover este convidado?")) {
    guestData.guests = guestData.guests.filter((g) => g.id !== guestId)
    renderGuestList()

    // Salvar automaticamente no Firebase
    saveToFirebase()
  }
}

function saveConfirmations() {
  showLoadingMessage(true)

  saveToFirebase()
    .then(() => {
      const successMessage = document.getElementById("successMessage")
      successMessage.style.display = "block"

      setTimeout(() => {
        successMessage.style.display = "none"
      }, 3000)
    })
    .catch((error) => {
      console.error("Erro ao salvar:", error)
      alert("Erro ao salvar confirmações. Tente novamente.")
    })
    .finally(() => {
      showLoadingMessage(false)
    })
}

// Salvar dados no Firebase
function saveToFirebase() {
  return database
    .ref("guestConfirmations/" + currentUser)
    .set(guestsData[currentUser])
    .then(() => {
      console.log("Dados salvos no Firebase com sucesso")
    })
    .catch((error) => {
      console.error("Erro ao salvar no Firebase:", error)
      throw error
    })
}

function updateAdminStats() {
  let totalConfirmed = 0
  let totalGuests = 0

  Object.values(guestsData).forEach((family) => {
    if (Array.isArray(family.guests)) {
      family.guests.forEach((guest) => {
        totalGuests++
        if (guest.confirmed) {
          totalConfirmed++
        }
      })
    }
  })

  const totalPending = totalGuests - totalConfirmed

  document.getElementById("totalConfirmed").textContent = totalConfirmed
  document.getElementById("totalPending").textContent = totalPending
  document.getElementById("totalGuests").textContent = totalGuests
}

function renderConfirmationsList() {
  const confirmationsList = document.getElementById("confirmationsList")
  confirmationsList.innerHTML = ""

  Object.entries(guestsData).forEach(([code, family]) => {
    const familyDiv = document.createElement("div")
    familyDiv.innerHTML = `<h4 style="margin: 20px 0 10px 0; color: #667eea;">${family.name} (${code})</h4>`
    confirmationsList.appendChild(familyDiv)

    if (Array.isArray(family.guests)) {
      family.guests.forEach((guest) => {
        const confirmationItem = document.createElement("div")
        confirmationItem.className = "confirmation-item"

        confirmationItem.innerHTML = `
          <div>
            <strong>${guest.name}</strong>
            <br>
            <small>${guest.relation}</small>
          </div>
          <div class="confirmation-status ${guest.confirmed ? "status-confirmed" : "status-pending"}">
            ${guest.confirmed ? "CONFIRMADO" : "PENDENTE"}
          </div>
        `

        confirmationsList.appendChild(confirmationItem)
      })
    }
  })
}

function exportData() {
  let exportText = "LISTA DE CONFIRMAÇÕES DE PRESENÇA\n"
  exportText += "=====================================\n\n"

  let totalConfirmed = 0
  let totalGuests = 0

  Object.entries(guestsData).forEach(([code, family]) => {
    exportText += family.name + " (" + code + ")\n"
    exportText += "-".repeat(30) + "\n"

    if (Array.isArray(family.guests)) {
      family.guests.forEach((guest) => {
      totalGuests++
      const status = guest.confirmed ? "✅ CONFIRMADO" : "❌ PENDENTE"
      exportText += guest.name + " (" + guest.relation + ") - " + status + "\n"
      if (guest.confirmed) totalConfirmed++
    })
      exportText += "\n"
    }
  })

  exportText += "RESUMO:\n"
  exportText += "Total de convidados: " + totalGuests + "\n"
  exportText += "Confirmados: " + totalConfirmed + "\n"
  exportText += "Pendentes: " + (totalGuests - totalConfirmed) + "\n"

  // Criar e baixar arquivo
  const blob = new Blob([exportText], { type: "text/plain" })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "lista-confirmacoes.txt"
  a.click()
  window.URL.revokeObjectURL(url)
}

function logout() {
  currentUser = null
  currentUserType = null
  document.getElementById("guestCode").value = ""
  document.getElementById("adminPassword").value = ""
  hideAllSections()
  document.getElementById("loginSection").style.display = "block"
}