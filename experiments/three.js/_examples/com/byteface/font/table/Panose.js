/*   Licensed to the Apache Software Foundation (ASF) under one or more   contributor license agreements.  See the NOTICE file distributed with   this work for additional information regarding copyright ownership.   The ASF licenses this file to You under the Apache License, Version 2.0   (the "License"); you may not use this file except in compliance with   the License.  You may obtain a copy of the License at       http://www.apache.org/licenses/LICENSE-2.0   Unless required by applicable law or agreed to in writing, software   distributed under the License is distributed on an "AS IS" BASIS,   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   See the License for the specific language governing permissions and   limitations under the License.   author java <a href="mailto:david@steadystate.co.uk">David Schweinsberg</a>   ported to as3 <a href="mailto:byteface@googlemail.com">Michael Lawrence</a>   ported to javascript <a href="mailto:byteface@googlemail.com">Michael Lawrence</a>*/Panose = Class.extend({        bFamilyType:0	, bSerifStyle:0	, bWeight:0	, bProportion:0	, bContrast:0	, bStrokeVariation:0	, bArmStyle:0	, bLetterform:0	, bMidline:0	, bXHeight:0, init: function Panose(panose){    this.bFamilyType = panose[0];    this.bSerifStyle = panose[1];    this.bWeight = panose[2];    this.bProportion = panose[3];    this.bContrast = panose[4];    this.bStrokeVariation = panose[5];    this.bArmStyle = panose[6];    this.bLetterform = panose[7];    this.bMidline = panose[8];    this.bXHeight = panose[9];       //alert( this.bFamilyType +"||"+ this.bSerifStyle +"||"+ this.bWeight +"||"+ this.bProportion +"||"+ this.bContrast +"||"+ this.bStrokeVariation +"||"+ this.bArmStyle +"||"+ this.bLetterform +"||"+ this.bMidline +"||"+ this.bXHeight );}// toString this one, toString: function(){    var sb = "";    sb += this.bFamilyType + " ";    sb += this.bSerifStyle + " ";    sb += this.bWeight + " ";    sb += this.bProportion + " ";    sb += this.bContrast + " ";    sb += this.bStrokeVariation + " ";    sb += this.bArmStyle + " ";    sb += this.bLetterform + " ";    sb += this.bMidline + " ";    sb += this.bXHeight + " ";    return sb;}});