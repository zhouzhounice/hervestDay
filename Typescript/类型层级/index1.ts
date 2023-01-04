type Result1_01 = 'anne' extends string?1:2; // 1
type Result2_01 = 1 extends number?1:2; //1
type Result3_01 = true extends boolean?1:2; // 1
type Result4_01 = {name:'anne'} extends object?1:2; //1
type Result5_01 = {name:string} extends object?1:2; // 1
type Result6_01 = [] extends object?1:2; // 1


type Result7_01 = 1 extends 1|2|3?1:2; // 1
type Result8_01 = 'lin' extends "lin"|"bu"|"du"?1:2;
type Result9_01 = true extends true|false?1:2;
type Result10_01 = string extends string |number|boolean?1:2;