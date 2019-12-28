var fs = require('fs');
var capitalize = require('capitalize');
const replace = require('replace-in-file');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

var path = process.argv[2];

var block_types = [
  'call-to-action',
  'contacts',
  'contents',
  'features',
  'footers',
  'forms',
  'headers',
  'pricings',
  'teams',
  'testimonials'
]

function createTsFile (itemPath, name) {
  let newName = capitalize.words(name.split('-').join(' ')).split(' ').join('')

  fs.writeFile(itemPath, `import { Component, OnInit } from '@angular/core';

@Component({
  selector: '${name}',
  templateUrl: './${name}.component.html',
  styleUrls: ['./${name}.component.css']
})
export class ${newName}Component implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}`, function(err) {
    if(err) {
        return console.log(err);
    }
});
}

function createCssFile (itemPath, name) {
  fs.writeFile(itemPath, ``, function(err) {
    if(err) {
        return console.log(err);
    }
  });
}

function createSpecFile (itemPath, name) {
  let newName = capitalize.words(name.split('-').join(' ')).split(' ').join('')

  fs.writeFile(itemPath, `import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ${newName}Component } from './${name}.component';

describe('${newName}Component', () => {
  let component: ${newName}Component;
  let fixture: ComponentFixture<${newName}Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ${newName}Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(${newName}Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});`, function(err) {
    if(err) {
        return console.log(err);
    }
});
}

function copyFile(itemPath, newPath) {
  var ws = fs.createReadStream(itemPath);
  ws.pipe(fs.createWriteStream(newPath));
  ws.on('close', function () {
    replace.sync({
      files: newPath,
      from: /imgs\//g,
      to: 'assets/imgs/'
    });
  })
}

function readContents(path, block_types) {
  fs.readdir(path, function(err, items) {
      for (var i = 0; i < items.length; i++) {
        console.log(`${path}/${items[i]}`)
        copyFile(`${path}/${items[i]}`, `src/app/${block_types}/${items[i].split('.html').join('.component.html')}`)
        createTsFile(`src/app/${block_types}/${items[i].split('.html')[0]}.component.ts`, items[i].split('.html')[0])
        createCssFile(`src/app/${block_types}/${items[i].split('.html')[0]}.component.css`, items[i].split('.html')[0])
        createSpecFile(`src/app/${block_types}/${items[i].split('.html')[0]}.spec.ts`, items[i].split('.html')[0])
      }
  });
}

for (var i = 0; i < block_types.length; i++) {
  readContents(`${path}/src/html/${block_types[i]}`, block_types[i])
}