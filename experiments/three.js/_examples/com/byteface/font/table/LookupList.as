/*   Licensed to the Apache Software Foundation (ASF) under one or more   contributor license agreements.  See the NOTICE file distributed with   this work for additional information regarding copyright ownership.   The ASF licenses this file to You under the Apache License, Version 2.0   (the "License"); you may not use this file except in compliance with   the License.  You may obtain a copy of the License at       http://www.apache.org/licenses/LICENSE-2.0   Unless required by applicable law or agreed to in writing, software   distributed under the License is distributed on an "AS IS" BASIS,   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   See the License for the specific language governing permissions and   limitations under the License.   author java <a href="mailto:david@steadystate.co.uk">David Schweinsberg</a>   ported to as3 <a href="mailto:byteface@googlemail.com">Michael Lawrence</a>   ported to javascript <a href="mailto:byteface@googlemail.com">Michael Lawrence</a> */ LookupList = Class.extend({    lookupCount:0,    lookupOffsets:null,    lookups:null,	init: function( byte_ar, offset, factory ){    byte_ar.pos = offset;        this.lookupCount = byte_ar.readUnsignedShort();    this.lookupOffsets = new int[lookupCount];    this.lookups = new Lookup[lookupCount];    for (var i=0; i < this.lookupCount; i++) {        this.lookupOffsets[i] = byte_ar.readUnsignedShort();    }    for (var j=0; j < this.lookupCount; j++) {        this.lookups[j] = new Lookup( factory, byte_ar, offset + this.lookupOffsets[j] );    }}, getLookup: function(feature, index){    if (feature.getLookupCount() > index) {        var i = feature.getLookupListIndex(index);        return this.lookups[i];    }    return null;}});