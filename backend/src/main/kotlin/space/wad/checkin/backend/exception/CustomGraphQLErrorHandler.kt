package space.wad.checkin.backend.exception

import graphql.ExceptionWhileDataFetching
import graphql.GraphQLError
import graphql.kickstart.execution.error.GraphQLErrorHandler
import org.springframework.stereotype.Component
import java.util.stream.Collectors

@Component
class CustomGraphQLErrorHandler: GraphQLErrorHandler {

    @Override
    override fun processErrors(list: MutableList<GraphQLError>): MutableList<GraphQLError> {
        return list.stream().map(this::getNested).collect(Collectors.toList())
    }

    private fun getNested(error: GraphQLError): GraphQLError {
        if (error is ExceptionWhileDataFetching && error.exception is GraphQLError) {
            return (error.exception as GraphQLError)
        }
        return error
    }
}