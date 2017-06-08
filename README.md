# Automizy-Tagger ($AT)

The **Automizy-Tagger** is the best module of the world. You can use it for everything!

![screenshot 1](https://raw.github.com/automizy/automizy-tagger/master/screenshot1.png)

### Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Options](#Options)
4. [Example](#Example)


<a name="Installation"></a>
## Installation

Download or fork **Automizy-Tagger** at [GitHub](https://github.com/Automizy/Automizy-Tagger).

```
git clone https://github.com/Automizy/Automizy-Tagger
```

or install with Bower:

```
bower install Automizy-Tagger
```

<a name="Usage"></a>
## Usage

First, load [jQuery](http://jquery.com) (v2.2.4 or greater), [Automizy-Project-Initializer](https://github.com/Automizy/Automizy-Project-Initializer), and the plugin:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript"></script>
<script src="vendor/automizy-project-initializer/automizy-project-initializer.js" type="text/javascript"></script>
<script src="vendor/automizy-tagger/automizy-tagger.min.js" type="text/javascript"></script>
<link href="vendor/automizy-tagger/automizy-tagger.min.css" rel="stylesheet" type="text/css">
```

Now, init the module and create a new sidebar:

```html
<script type="text/javascript">
    $AT.init().ready(function(){
        //do something
    });
</script>
```

<a name="Options"></a>
## Options

### New Module

#### Init parameters

```javascript
//code
```

#### Dynamic functions

```javascript
//code
```


## Example

```javascript
$AT.init().ready(function () {
    //code
})
```



<a name="License"></a>
## License

Copyright (c) 2017 [Automizy](https://automizy.com).

**Automizy-Tagger** is released under the [MIT license](http://github.com/automizy/automizy-tagger/raw/master/LICENSE.md).
