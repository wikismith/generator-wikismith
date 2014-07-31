---
title: Congratulations!
subtitle: You have successfully setup your Wikismith project.
created: 2014/06/29 16:40 CST
author: Jeffrey R. Hicks
theme: bs3
---

# Getting Started

Nam dictum sapien a velit rhoncus condimentum.
orem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
t magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget tincidunt
mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique vulputate. Sed lobortis,
purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia neque neque et eros. Vestibulum
mauris purus, pharetra in felis mollis, bibendum faucibus nisi. Nam dictum sapien a velit rhoncus
condimentum.


###Lorem Ipsum

Nam dictum sapien a velit rhoncus condimentum.
orem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
t magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget tincidunt
mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique vulputate. Sed lobortis,
purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia neque neque et eros. Vestibulum
mauris purus, pharetra in felis mollis, bibendum faucibus nisi. Nam dictum sapien a velit rhoncus
condimentum.

###Duis Viverra

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.

###Sap dolor

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.

##Source code

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.

```javascript
function serve() {
    wikismith.watch()
        .pipe(wikismith.pipeline())
        .pipe(gulp.dest('build'))
        .pipe(es.map(function(file, cb) {
            lr.changed({body: { files: [file.path] }});
            cb(null, file);
        }));

    app.use(livereload());
    app.use(express.static(__dirname + '/build'));
    app.listen(9292);
    lr.listen(35729);
}
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.

##Quisque interdum

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.

##Cras Varius

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.

##Praesent Tempor

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.

##Quisque interdum2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.

##Cras Varius2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.

##Praesent Tempor2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit risus nec lacinia pharetra.
Ut magna diam, varius eu elementum vel, suscipit a magna. Nulla ullamcorper sagittis elit, eget
tincidunt mi lobortis sollicitudin. Aliquam pretium est dui, eget ullamcorper diam tristique
vulputate. Sed lobortis, purus sit amet condimentum rhoncus, eros nunc cursus mauris, vel lacinia
neque neque et eros. Vestibulum mauris purus, pharetra in felis mollis, bibendum faucibus nisi.
