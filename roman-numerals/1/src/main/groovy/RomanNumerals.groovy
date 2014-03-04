/*
 * This Groovy source file was auto generated by running 'gradle buildInit --type groovy-library'
 * by 'mcornell' at '3/3/14 9:13 PM' with Gradle 1.11
 *
 * @author mcornell, @date 3/3/14 9:13 PM
 */
class RomanNumerals {

	def ARABIC_TO_ROMAN = [
	    1000 : 'M',
	    900  : 'CM',
	    500  : 'D',
	    400  : 'CD',
	    100  : 'C',
	    90   : 'XC',
	    50   : 'L',
	    40   : 'XL',
		10   : 'X',
		9    : 'IX',
		5    : 'V',
		4    : 'IV', 
		1    : 'I'
	]

	def ROMAN_TO_ARABIC = [
		'M' : 1000,
		'D' : 500,
		'C' : 100,
	    'L' : 50,
		'X' : 10,
		'V' : 5,
		'I' : 1
	]

    def translate(int number) {
    	def roman = ''
    	ARABIC_TO_ROMAN.each { 
    		while (number > (it.key - 1)) {
    			roman += it.value
    			number -= it.key
    		}
    	}
        roman
    }

    def translate(String roman) {
    	def arabic = 0
    	roman.each {
    		arabic += ROMAN_TO_ARABIC[it]
    	}
    	arabic
    }
  
}
