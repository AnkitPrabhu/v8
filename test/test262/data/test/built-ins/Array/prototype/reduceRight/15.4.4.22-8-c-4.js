// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-8-c-4
description: >
    Array.prototype.reduceRight doesn't throw error when array has no
    own properties but prototype contains a single property
---*/

        var arr = [, , , ];

        try {
            Array.prototype[1] = "prototype";
            arr.reduceRight(function () { });
        } finally {
            delete Array.prototype[1];
        }
