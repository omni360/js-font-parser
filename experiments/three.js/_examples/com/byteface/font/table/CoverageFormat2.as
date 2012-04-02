/*   Licensed to the Apache Software Foundation (ASF) under one or more   contributor license agreements.  See the NOTICE file distributed with   this work for additional information regarding copyright ownership.   The ASF licenses this file to You under the Apache License, Version 2.0   (the "License"); you may not use this file except in compliance with   the License.  You may obtain a copy of the License at       http://www.apache.org/licenses/LICENSE-2.0   Unless required by applicable law or agreed to in writing, software   distributed under the License is distributed on an "AS IS" BASIS,   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   See the License for the specific language governing permissions and   limitations under the License.   author java <a href="mailto:david@steadystate.co.uk">David Schweinsberg</a>   ported to as3 <a href="mailto:byteface@googlemail.com">Michael Lawrence</a */package org.libspark.font.table{import flash.utils.ByteArray;public class CoverageFormat2 extends Coverage {    private var rangeCount:int;    private var rangeRecords:Array;    /** Creates new CoverageFormat2 */    public function CoverageFormat2(byte_ar:ByteArray)	{        rangeCount = byte_ar.readUnsignedShort();        rangeRecords = new RangeRecord[rangeCount];        for (var i:int= 0; i < rangeCount; i++) {            rangeRecords[i] = new RangeRecord(byte_ar);        }    }    override public function getFormat():int{        return 2;    }    override public function findGlyph(glyphId:int):int{        for (var i:int= 0; i < rangeCount; i++) {            var n:int= rangeRecords[i].getCoverageIndex(glyphId);            if (n > -1) {                return n;            }        }        return -1;    }}}