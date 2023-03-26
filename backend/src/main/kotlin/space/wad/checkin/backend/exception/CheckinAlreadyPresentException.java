package space.wad.checkin.backend.exception;

import java.util.List;

import graphql.ErrorClassification;
import graphql.ErrorType;
import graphql.GraphQLError;
import graphql.language.SourceLocation;

public class CheckinAlreadyPresentException extends RuntimeException implements GraphQLError {

	public CheckinAlreadyPresentException() {
		super("Unique constraint violation: provided check-in already present in the database.");
	}

	@Override public List<SourceLocation> getLocations() {
		return null;
	}

	@Override public ErrorClassification getErrorType() {
		return ErrorType.DataFetchingException;
	}
}
