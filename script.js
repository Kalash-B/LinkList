
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}
let s=0
var bposition;
var dposition;
const linkedList = new LinkedList();
const container = document.getElementById('linked-list');

function displayLinkedList() {
    container.innerHTML = ''; 
    let currentNode = linkedList.head;
    let position = 1;
        
    while (currentNode) {
        const nodeContainer = document.createElement('div');
        nodeContainer.classList.add('node');
        
        const nodeValue = document.createElement('div');
        nodeValue.classList.add('node-value');
        nodeValue.textContent = 'Value: ' + currentNode.data;

        const nodeAddress = document.createElement('div');
        nodeAddress.classList.add('node-address');
        nodeAddress.textContent = 'Next: ' + ((currentNode.next) ? `${position + 1}` : 'null');
    
        nodeContainer.appendChild(nodeValue);
        nodeContainer.appendChild(nodeAddress);
            
        container.appendChild(nodeContainer);
        if (currentNode.next) {
            const line = document.createElement('div');
            line.classList.add('line');
            container.appendChild(line);
        }
        if(s==1 && position==1)
        {
                nodeContainer.style.transform = 'translateX(-100%)';
                setTimeout(() => {
                nodeContainer.style.transform = 'translateX(0)';
                }, 400);
        }
        else if(s==2 && currentNode.next==null)
        {
            
                nodeContainer.style.transform = 'translateX(100%)';
                setTimeout(() => {
                nodeContainer.style.transform = 'translateX(0)';
                }, 400);
        }
            
        else if(s===3 && bposition===position)
        {
            nodeContainer.style.transform = 'translateY(100%)';
            setTimeout(() => {
            nodeContainer.style.transform = 'translateY(0)';
            }, 400);
        }
        else if(s===4 && dposition<=position)
        {
            nodeContainer.style.transform = 'translateX(100%)';
            setTimeout(() => {
                nodeContainer.style.transform = 'translateX(0)';
            }, 400);
        }
        
        currentNode = currentNode.next;
        position++;
    }}

function addNodeAtBeginning() {
    s=1;
    const nodeData = parseInt(document.getElementById('node-data').value);
    if (!isNaN(nodeData)) {
        const newNode = new Node(nodeData);
        newNode.next = linkedList.head;
        linkedList.head = newNode;
        const nodeContainer = document.createElement('div');
        nodeContainer.classList.add('node', 'appear');
        const nodeValue = document.createElement('div');
        nodeValue.classList.add('node-value');
        nodeValue.textContent = 'Value: ' + nodeData;
        const nodeAddress = document.createElement('div');
        nodeAddress.classList.add('node-address');
        nodeAddress.textContent = 'Next: ' + (newNode.next ? 'Position: 2' : 'null');
        nodeContainer.appendChild(nodeValue);
        nodeContainer.appendChild(nodeAddress);
        container.insertBefore(nodeContainer, container.firstChild);
        setTimeout(() => {
            nodeContainer.style.transform = 'translateX(0)';
        }, 400);
        displayLinkedList();
    }
}

function addNodeAtEnd() {
    s=2;
    const nodeData = parseInt(document.getElementById('node-data').value);
    if (!isNaN(nodeData)) {
        const newNode = new Node(nodeData);
        if (!linkedList.head) {
            linkedList.head = newNode;
            const nodeContainer = document.createElement('div');
            nodeContainer.classList.add('node', 'appear');
            const nodeValue = document.createElement('div');
            nodeValue.classList.add('node-value');
            nodeValue.textContent = 'Value: ' + nodeData;
            const nodeAddress = document.createElement('div');
            nodeAddress.classList.add('node-address');
            nodeAddress.textContent = 'Next: null';
            nodeContainer.appendChild(nodeValue);
            nodeContainer.appendChild(nodeAddress);
            container.appendChild(nodeContainer);
            slideNodeIn(nodeContainer);
        } else {
            let currentNode = linkedList.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            setTimeout(() => {
                const nodeContainer = document.createElement('div');
                nodeContainer.classList.add('node', 'appear');
                const nodeValue = document.createElement('div');
                nodeValue.classList.add('node-value');
                nodeValue.textContent = 'Value: ' + nodeData;
                const nodeAddress = document.createElement('div');
                nodeAddress.classList.add('node-address');
                slideNodeIn(nodeContainer);
            }, 400); 
        }
        
        displayLinkedList();
    }
}

function deleteNodeAtPosition() {
    s=4;
    dposition = parseInt(prompt('Enter the position of the node to delete:'));
    if (!isNaN(dposition) && dposition >= 1) {
        if (dposition === 1) {
            linkedList.head = linkedList.head ? linkedList.head.next : null;
        } else {
            let currentNode = linkedList.head;
            let previousNode = null;
            let currentPosition = 1;

            while (currentNode && currentPosition < dposition) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentPosition++;
            }

            if (currentNode) {
                previousNode.next = currentNode.next;
            }
        }

        displayLinkedList();
    }
}

function addNodeInBetween() {
    s=3;
    const nodeData = parseInt(document.getElementById('node-data').value);
    bposition = parseInt(prompt('Enter the position to add the node in between:'));
    if (!isNaN(nodeData) && !isNaN(bposition) && bposition >= 1) {
        const newNode = new Node(nodeData);

        if (bposition === 1) {
            newNode.next = linkedList.head;
            linkedList.head = newNode;
        } else {
            let currentNode = linkedList.head;
            let previousNode = null;
            let currentPosition = 1;

            while (currentNode && currentPosition < bposition) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentPosition++;
            }

            if (currentNode) {
                newNode.next = currentNode;
                previousNode.next = newNode;
            }
            
        }
        
        displayLinkedList();
    }
}
displayLinkedList(); 