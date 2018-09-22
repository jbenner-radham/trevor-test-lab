trevor-test-lab
===============
A test lab for [trevor](https://www.npmjs.com/package/trevor) development.

Project Structure
-----------------
As per the CommonJS packages spec:
> A CommonJS package will observe the following:
>   * A package.json file must be in the top level directory
>   * Binary files should be in the "bin" directory,
>   * Javascript code should be under the "lib" directory
>   * Documentation should be under the "doc" directory
>   * Unit tests should be under the "test" directory

Install
-------
```sh
$ yarn install
```

Testing
-------
```sh
$ yarn prepublishOnly
```

References
----------
* [Packages/1.0 - CommonJS Spec Wiki - Package Directory Layout](http://wiki.commonjs.org/wiki/Packages/1.0#Package_Directory_Layout)
* [package.json | npm Documentation](https://docs.npmjs.com/files/package.json)
