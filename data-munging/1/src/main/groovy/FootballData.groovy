/*
 * This Groovy source file was auto generated by running 'gradle buildInit --type groovy-library'
 * by 'mcornell' at '5/17/14 11:04 AM' with Gradle 1.12
 *
 * @author mcornell, @date 5/17/14 11:04 AM
 */
class FootballDataParser {
    FootballData parseLine(String line) {
        def result 

        def splitted = line.split()
        if (splitted.size() == 10) {
            result = new FootballData()
            result.with {
            	name = splitted[1]
            	goalsFor = convertColumnToInteger(splitted[6])
            	goalsAgainst = convertColumnToInteger(splitted[8])
            }
            result.spread = result.goalsFor - result.goalsAgainst
        }
        result
    }

    Integer convertColumnToInteger(String column) {
    	column.collectReplacements { str -> str == '*' ? '' : null } as Integer
    }

    List<FootballData> readData(def dataFile) {
        def data = []
        dataFile.eachLine {
            def team = parseLine(it)
            if (team) {
                data << team
            }
        }
        data
    }

    FootballData findLargestSpread(def dataFile) {
        def sortedBySpread = readData(dataFile).sort { a, b -> b.spread <=> a.spread }

        def largestSpread = sortedBySpread[0]
        println "${largestSpread.name} had the largest goals spread of ${largestSpread.spread} with ${largestSpread.goalsFor} for and ${largestSpread.goalsAgainst} against"
        largestSpread
    }

}

class FootballData {
	String name
	Integer goalsFor
	Integer goalsAgainst
    Integer spread
}
