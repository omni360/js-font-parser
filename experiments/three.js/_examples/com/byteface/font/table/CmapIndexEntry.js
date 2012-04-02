/*   Licensed to the Apache Software Foundation (ASF) under one or more   contributor license agreements.  See the NOTICE file distributed with   this work for additional information regarding copyright ownership.   The ASF licenses this file to You under the Apache License, Version 2.0   (the "License"); you may not use this file except in compliance with   the License.  You may obtain a copy of the License at       http://www.apache.org/licenses/LICENSE-2.0   Unless required by applicable law or agreed to in writing, software   distributed under the License is distributed on an "AS IS" BASIS,   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   See the License for the specific language governing permissions and   limitations under the License.   author java <a href="mailto:david@steadystate.co.uk">David Schweinsberg</a>   ported to as3 <a href="mailto:byteface@googlemail.com">Michael Lawrence</a>   ported to javascript <a href="mailto:byteface@googlemail.com">Michael Lawrence</a> */ CmapIndexEntry = Class.extend({    platformId:0,    encodingId:0,    offset:0,		init: function( byte_ar ){    this.platformId = byte_ar.readUnsignedShort();    this.encodingId = byte_ar.readShort();    this.offset = byte_ar.readInt();}, toString: function(){    var platform = "";    var encoding = "";    switch(this.platformId) {        case 1: platform = " (Macintosh)"; break;        case 3: platform = " (Windows)"; break;        default: platform = "";    }        if(platformId == 3) {        // Windows specific encodings        switch(this.encodingId) {            case 0: encoding = " (Symbol)"; break;            case 1: encoding = " (Unicode)"; break;            case 2: encoding = " (ShiftJIS)"; break;            case 3: encoding = " (Big5)"; break;            case 4: encoding = " (PRC)"; break;            case 5: encoding = " (Wansung)"; break;            case 6: encoding = " (Johab)"; break;            default: encoding = "";        }    }        var str = "";    str += "platform id: " + platformId + platform;    str += ", encoding id: " + encodingId + encoding;    str += ", offset: " + offset;}});