/*   Licensed to the Apache Software Foundation (ASF) under one or more   contributor license agreements.  See the NOTICE file distributed with   this work for additional information regarding copyright ownership.   The ASF licenses this file to You under the Apache License, Version 2.0   (the "License"); you may not use this file except in compliance with   the License.  You may obtain a copy of the License at       http://www.apache.org/licenses/LICENSE-2.0   Unless required by applicable law or agreed to in writing, software   distributed under the License is distributed on an "AS IS" BASIS,   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   See the License for the specific language governing permissions and   limitations under the License.      Simple Macintosh cmap table, mapping only the ASCII character set to glyphs.   author java <a href="mailto:david@steadystate.co.uk">David Schweinsberg</a>   ported to as3 <a href="mailto:byteface@googlemail.com">Michael Lawrence</a>   ported to javascript <a href="mailto:byteface@googlemail.com">Michael Lawrence</a>    */CmapFormat0 = Class.extend({    glyphIdArray:[],    first:0,    last:0,    format:0,    length:0,    version:0,    /** *  * @param byte_ar *  */		init: function( byte_ar ){    this.length = byte_ar.readUnsignedShort();    this.version = byte_ar.readUnsignedShort();        this.format = 0;    this.first = -1;        for(var i=0; i < 256; i++)    {        this.glyphIdArray[i] = byte_ar.readUnsignedByte();                if (this.glyphIdArray[i] > 0) {            if (this.first == -1) this.first = i;            this.last = i;        }    }}, getFirst: function(){ return this.first; }, getLast: function(){ return this.last; }, mapCharCode: function(charCode){    if (0<= charCode && charCode < 256) {        return this.glyphIdArray[charCode];    } else {        return 0;    }}, toString: function(){    return "format: " + format + ", length: " + length + ", version: " + version;		}});