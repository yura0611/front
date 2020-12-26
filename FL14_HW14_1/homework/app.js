const data = [
  {
    'folder': true,
    'title': 'Grow',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'English',
        'children': [
          {
            'title': 'Present_Perfect.txt'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Soft',
    'children': [
      {
        'folder': true,
        'title': 'NVIDIA',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'folder': true,
    'title': 'Doc',
    'children': [
      {
        'title': 'project_info.txt'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');




function renderTree(entries) {
  const list = document.createElement('ul');
  for(const entry of entries) {
    const item = document.createElement('li');
    const icon = document.createElement('i');

    icon.classList.add('material-icons');
    item.classList.add(entry.folder ? 'folder' : 'file');
    list.classList.add('closed');

    item.textContent = entry.title;
      item.onclick = function myF() {
            icon.textContent = 'folder_open';
            list.classList.toggle('closed');
        }

    if(item.classList.contains('folder')) {
      icon.textContent = 'folder';
      item.insertAdjacentElement('afterbegin', icon);
    } else {
      icon.textContent = 'insert_drive_file';
      item.insertAdjacentElement('afterbegin', icon);
    }

    list.appendChild(item);
    if(entry.folder && entry.children !== null) {
      list.appendChild(renderTree(entry.children));
    }

  }
  return list;
}

const app = renderTree(data);

app.classList.add('app');

rootNode.appendChild(app);





