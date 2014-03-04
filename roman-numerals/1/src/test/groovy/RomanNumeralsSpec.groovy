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
        50     || 'L'
    }
}
