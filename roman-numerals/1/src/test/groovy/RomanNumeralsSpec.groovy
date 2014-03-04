/*
 * This Spock specification was auto generated by running 'gradle init --type groovy-library'
 * by 'mcornell' at '3/3/14 9:13 PM' with Gradle 1.11
 *
 * @author mcornell, @date 3/3/14 9:13 PM
 */

import spock.lang.Specification
import spock.lang.Unroll

class RomanNumeralsSpec extends Specification {

	def romanNumerals

	void setup() {
		romanNumerals = new RomanNumerals()
	}

	@Unroll
    def "RomanNumerals can translate #arabic to roman"() {
        expect:
        romanNumerals.translate(arabic) == roman
        where:
        arabic || roman
        1      || 'I'
        2	   || 'II'
        4      || 'IV'
        5      || 'V'
        6      || 'VI'
        9      || 'IX'
        10     || 'X'
        19     || 'XIX'
        20     || 'XX'
        40     || 'XL'
        50     || 'L'
        90 	   || 'XC'
        100    || 'C'
        400    || 'CD'
        500    || 'D'
        900    || 'CM'
        1000   || 'M'
        1990   || 'MCMXC'
        2014   || 'MMXIV'
        3888   || 'MMMDCCCLXXXVIII'
        3999   || 'MMMCMXCIX'
    }

    @Unroll
    def "RomanNumerals can translate #roman to arabic"() {
        expect:
        romanNumerals.translate(roman) == arabic
        where:
        roman             || arabic  
        'I'               || 1       
        'II'              || 2	   
        'IV'              || 4       
        'V'               || 5       
        'VI'              || 6       
        //'IX'              || 9       
        'X'               || 10      
        //'XIX'             || 19      
        'XX'              || 20      
        //'XL'              || 40      
        'L'               || 50      
        //'XC'              || 90 	   
        'C'               || 100     
        //'CD'              || 400     
        'D'               || 500     
        //'CM'              || 900     
        'M'               || 1000    
        //'MCMXC'           || 1990    
        //'MMXIV'           || 2014    
        //'MMMDCCCLXXXVIII' || 3888    
        //'MMMCMXCIX'       || 3999    
    }
}
